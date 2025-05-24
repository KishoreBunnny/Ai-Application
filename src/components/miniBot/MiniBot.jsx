"use client"
import { ArrowUp, Bot, ChevronDown, Expand, Paperclip, SquarePen } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import Markdown from "react-markdown";
import Tooptip from "../HelpersComponents/Tooltip";
import { useRouter } from "next/navigation";
import { HandleAiInputFunction } from "@/helperFunctions/AiResponse";
import { useMiniBotContent } from "@/contents/MiniBotContent";

export default function MiniBot() {
    const pathname = usePathname()
    const router=useRouter()
    // const [toggle, setToggle] = useState(false)

    const {toggle, setToggle ,input,setInput,output,setOutput,loading,setLoading}= useMiniBotContent()

    // const [input, setInput] = useState('')
    // const [output, setOutput] = useState('')
    // const [loading, setLoading] = useState(false)


    const HandleInput = async () => {
        console.log(input)
        setLoading(true)

        //modified function (nothing made modular)    
        const res=await HandleAiInputFunction(input)
         if(res)  setOutput(res)


        // this was 1st    
        // try {
        //     const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        //         method: "POST",
        //         headers: {
        //             "Authorization": "Bearer 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",
        //             "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
        //             "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
        //             "Content-Type": "application/json"
        //         },
        //         body: JSON.stringify({
        //             "model": "deepseek/deepseek-r1:free",
        //             "messages": [{ "role": "user", "content": input }
        //             ]
        //         })
        //     });
        //     const data = await response.json();
        //     console.log(data.choices?.[0]?.message?.content)
        //     setOutput(data.choices?.[0]?.message?.content)
        // } catch (error) {
        //     console.log(error)

        // }

        setLoading(false)
        setInput('')
    }

    const fileInputRef = useRef(null);
    const textInputRef = useRef(null);
    useEffect(() => {
        if (textInputRef.current) textInputRef.current.focus();
    }, [toggle])

    const handleFileInput = () => {
        fileInputRef.current.click();
    }



    return (
        <>
            {
                !pathname.startsWith("/bot") &&

                <div className="hidden md:block lg:block  " >


                    <button onClick={() => setToggle(true)} title="Ask Ai " className="w-13 h-13 hover:bg-zinc-900/70 md:mb-20 md:mr-0.5 lg:mr-.5 shadow-zinc-500 shadow-[0px_0px_10px_1px] flex justify-center items-center cursor-pointer  fixed bottom-0 right-0  lg:mb-4 rounded-xl bg-zinc-900 " >
                        <Bot size={30} />
                    </button>

                    {toggle &&
                        <div className="w-100 h-140 mb-4  mr-0 bg-zinc-950 fixed bottom-0 right-0 rounded-2xl shadow-zinc-500 shadow-[0px_0px_5px_0.5px] " >
                            <div className="w-full h-10 flex justify-between px-5 py-6 border-b-1 border-zinc-6e00 "  >
                                <div onClick={() => setToggle(false)} className="flex cursor-pointer justify-center items-center  gap-1 " > <Bot size={40} /> <h3 className="font-extrabold text-xl" >Bot</h3></div>
                                <div className="flex justify-center items-center gap-6 " >


                                   <div className="relative group inline-block ">   
                                    <Tooptip text="Open Conversation" />
                                    <button onClick={()=>{
                                        setToggle(false)
                                        router.push("/bot")
                                        }} className=" hover:bg-zinc-800 rounded-full p-1 cursor-pointer" > 
                                        <Expand size={20} />
                                    </button> 
                                    
                                   </div> 
                                   
                                    <div className="relative group inline-block ">
                                        <Tooptip text="New Chat" />
                                        <button onClick={() => {
                                            setInput("")
                                            setOutput("")
                                             }} className=" hover:bg-zinc-800 rounded-full p-1 cursor-pointer " >
                                            <SquarePen size={20} />
                                        </button>
                                    </div>

                                    <div className="relative group inline-block ">          
                                         <Tooptip text="Collapse" />    
                                        <button onClick={() => setToggle(false)} className=" hover:bg-zinc-800 rounded-full p-1 cursor-pointer " >
                                            <ChevronDown size={20} />
                                        </button>
                                    </div>    


                                    </div>
                                </div>
                                <section className='h-full w-full   px-2 overflow-auto '>
                                    <div className="bg-zinc-900/50 text-zinc-300 scrollbar-hidden w-fit max-w-65 lg:max-w-90 overflow-auto py-3 px-4 my-4 ml-auto rounded-[25px]">
                                        <p className="text-lg font-light font-sans ">{input}</p>
                                    </div>

                                    <div className=" text-zinc-300 w-fit max-w-65 lg:max-w-100 py-3 px-4 my-4 rounded-[25px]">
                                        <pre className="text-lg font-medium whitespace-pre-wrap mb-50 lg:mb-42 ">
                                            {
                                                loading ? <h1>loading...</h1> : output && <Markdown>{output}</Markdown>
                                            }
                                        </pre>
                                    </div>
                                    {/* {
                    messages.map((mess, idx) => (
                        <div key={idx} className="bg-zinc-900/50 text-zinc-300 w-fit max-w-65 scrollbar-hidden lg:max-w-90 overflow-auto py-3 px-4 my-4 ml-auto rounded-[25px]">
                            <p className="text-lg font-light font-sans ">{mess.message}</p>
                        </div>
                    ))

                } */}


                                </section>

                                <div className="w-full flex justify-center items-center  " >
                                    <div className='lg:w-100  h-30 bottom-0 rounded-lg flex justify-center items-center  fixed bg-zinc-950/10  backdrop-blur-[5px]  '>
                                        <div className="lg:w-full h-40  w-[43vw] 'w-[98vw] scale-95  z-10 fixed   bottom-2 p-5 rounded-3xl bg-zinc-900 ">
                                            <textarea type="text" ref={textInputRef} value={input} onChange={(e) => { setInput(e.target.value) }} className="p-2 resize-none w-full h-1/2 outline-none text-zinc-200 text-xl " placeholder="Ask anything" rows="3" />
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
                            </div>
                    }

                        </div>
                    }
                </>
    )
}





