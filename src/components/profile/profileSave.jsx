import { useProfileContent } from "@/contents/ProfileContent";
import { Toast } from "../HelpersComponents/Toast/toast";
import { useState } from "react";

export default function ProfileSave(){
  
    const {setProfileStack,setIsOpen}=useProfileContent();
    const handleSave=async ()=>{
        setProfileStack(1)
        setIsOpen(false)
        const res = await fetch('/api/hello');
        const data = await res.json();
        console.log(data.message);
       
    }
    return(
        <>
            <div className="flex flex-col justify-center  items-center mt-30 ">
                <h2 className="text-3xl font-bold">Click to save updates</h2>
                <p className="text-zinc-500">All Changes till now made will be saved</p>
            </div>
            <div className="flex justify-center items-center mt-5  ">
                
                    <button onClick={handleSave} className="p-3 px-7 bg-zinc-200 text-zinc-900 border-2 hover:bg-zinc-200/90 border-zinc-300 cursor-pointer text-xl font-semibold rounded-full  " >Save</button>
                
            </div>
           

        </>
    )
}