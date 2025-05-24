'use client'

import Tooptip from '@/components/HelpersComponents/Tooltip';
import { ArrowUp, Expand, Paperclip, History, Minimize2 } from 'lucide-react';

import { useEffect, useRef, useState } from 'react';
import Markdown from 'react-markdown'



const messages = [
    { message: "hi" },
    { message: "hello" },
    { message: "hey" },
    { message: "greetings" },
    { message: "yo" },

];



export default function Bot() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const [loading, setLoading] = useState(false)
    const [isFull, setIsFull] = useState(false)
    const HandleInput = async () => {
        console.log(input)
        setLoading(true)
        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer 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",
                    "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
                    "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "deepseek/deepseek-r1:free",
                    "messages": [{ "role": "user", "content": input }
                    ]
                })
            });
            const data = await response.json();
            if(data.choices?.[0]?.message?.content){
                console.log(data.choices?.[0]?.message?.content)
                return setOutput(data.choices?.[0]?.message?.content)
            }
            if(data.error || data.error.message ) return setOutput(data.error.message) 
            return setOutput("Something went wrong")
            setOutput(data.choices?.[0]?.message?.content)
        } catch (error) {
            console.log(error)
            setOutput("error in main ai-bot please check network ")

        }finally{
            setLoading(false)
            setInput('')
        }

        
    }

    const fileInputRef = useRef(null);
    const textInputRef = useRef(null);
    useEffect(() => {
        textInputRef.current.focus();
    }, [])

    const handleFileInput = () => {
        fileInputRef.current.click();
    }
    return (
        <div className={` min-h-screen ${isFull ? "lg:min-w-[95vw]" : "lg:w-full"} lg:border-r-1 md:border-r-1  border-zinc-500/50   `}>

            
             <nav className=' w-full flex justify-between items-start py-2 px-3 top-0  h-10 sticky bg-zinc-950/10  backdrop-blur-[5px]  '>
                    <div className=' hidden md:hidden lg:inline-block group  relative' >
                        <button onClick={() => {
                            isFull ? setIsFull(false) : setIsFull(true)

                        }} className=" hover:bg-zinc-800 rounded-full p-1 cursor-pointer" >
                            {isFull ? <Minimize2 size={20} /> : <Expand size={20} />}
                        </button>
                        <Tooptip text={"Minimize"} down />

                    </div>
                    <div>
                    <div className=' inline-block group  relative' > 
                        <Tooptip text={"Select Model"} down />
                        <select name="version" id="version" className='p-2 cursor-pointer text-lg font-extrabold px-3 outline-none hover:bg-zinc-900 rounded-2xl' >
                            <option value="version-3">Gemini-ai</option>
                            <option value="version-3">Open-ai</option>
                            <option value="version-3">Deepseek-ai</option>
                        </select>
                     </div>   

                    </div>
                    <div className='flex justify-center hover:bg-zinc-900 p-2 rounded-2xl cursor-pointer items-center gap-1' ><History /><span className='text-lg font-bold' >History</span></div>
             </nav>


           
            <section className='h-full w-full px-2 overflow-auto '>
                <div className="bg-zinc-900/50 text-zinc-300 w-fit max-w-65 lg:max-w-150 py-3 px-4 my-4 ml-auto rounded-[25px]">
                    <p className="text-lg font-light font-sans ">{input}</p>
                </div>

                <div className=" text-zinc-300 w-fit max-w-65 lg:max-w-220 py-3 px-4 my-4 rounded-[25px]">
                    <pre className="text-lg font-medium whitespace-pre-wrap mb-50 lg:mb-42 ">
                        {
                            loading ? <h1>loading...</h1> : output && <Markdown>{output}</Markdown>
                        }
                    </pre>
                </div>
                {/* {
                    messages.map((mess, idx) => (
                        <div key={idx} className="bg-zinc-900/50 text-zinc-300 w-fit max-w-65 lg:max-w-150 py-3 px-4 my-4 ml-auto rounded-[25px]">
                            <p className="text-lg font-light font-sans ">{mess.message}</p>
                        </div>
                    ))

                } */}


            </section>



            <div className={`   ${isFull ? "lg:min-w-[95vw]" : "lg:w-[74%]"} bg-zinc-950/10 h-45 bottom-0 lg:p-5 mb-15 lg:mb-0 pb-12 fixed   backdrop-blur-[5px]  `}>
                <div className={` ${isFull ? "lg:ml-55" :"" }  lg:w-220 w-[98vw] ml-[3px] lg:mb-5 z-10 fixed lg:ml-20  bottom-2 p-5 rounded-3xl bg-zinc-900 `}>
                    <textarea ref={textInputRef} value={input} onChange={(e) => { setInput(e.target.value) }} className="p-2 w-full outline-none text-zinc-200 text-xl " placeholder="Ask anything" rows="2" />
                    <div className="w-full flex justify-between items-center mt-2 ">
                        <input accept='application/pdf' ref={fileInputRef} type="file" className='hidden' />
                        <button onClick={handleFileInput} className='w-10 h-10 cursor-pointer rounded-full bg-zinc-800  flex justify-center items-center hover:bg-zinc-800/50'>
                            <Paperclip color='#71717a' strokeWidth={2} />
                        </button>

                        <button onClick={HandleInput} className='w-10 h-10 cursor-pointer rounded-full bg-zinc-300 flex justify-center items-center hover:bg-zinc-400'>
                            <ArrowUp color='black' strokeWidth={3} />
                        </button>

                    </div>

                </div>

            </div>


        </div>
    )
} 