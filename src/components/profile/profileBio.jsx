"use client"
import { useProfileContent } from "@/contents/ProfileContent";
import { useState } from "react";

export default function ProfileBio() {
    const {setProfileStack}=useProfileContent();
    const [text, setText] = useState('');
    const maxChars = 100;

    const handleChange = (e) => {
        const inputValue = e.target.value;

        if (inputValue.length <= maxChars) {
            setText(inputValue);
        }
    };

    return (
        <>
            <div className="flex flex-col justify-center  items-center mt-5 ">
                <h2 className="text-2xl font-bold">Describe yourself</h2>
                <p className="text-zinc-500">What makes you special? Don't think too hard, just have fun with it.</p>
            </div>
            <div className="flex justify-center flex-col items-center  mt-15 ">
                <div className="flex justify-between w-80 items-center mb-2 " >
                    <label className="text-xl font-semibold text-zinc-300 " >Your Bio</label>
                    <p className=" font-semibold text-md text-zinc-300 " >{text.length}/{maxChars}</p>
                </div>

                <input
                    value={text}
                    onChange={handleChange}
                    placeholder="Your Bio"
                    type="text" className="p-3 w-80 text-lg font-semibold  text-nowrap  rounded-lg outline-none border-1 border-zinc-500 " />

            </div>
            <div className="flex justify-center items-center mt-42.5  ">
                        <button onClick={()=>{setProfileStack(4)}} className={`p-3 border-2  border-zinc-300 cursor-pointer text-xl font-semibold rounded-full ${!text? "hover:bg-zinc-700/30  ": "bg-zinc-200 px-7  text-zinc-900  hover:bg-zinc-200/90" }  `} >{ !text ? "Skip for now":"Next"}</button>
            </div>

        </>
    )
}