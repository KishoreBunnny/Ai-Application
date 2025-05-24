"use client"

import { UserRoundCog } from "lucide-react";
import { useState } from "react";
import UserEdit from "./UserEdit";
import {useProfileContent} from "@/contents/ProfileContent"

export default function UserEditButton(){
    // const [isOpen,setIsOpen]=useState(false);
    const {isOpen,setIsOpen}=useProfileContent();
    return(
       <>
            <button onClick={()=>{setIsOpen(true)}} className='ml-65  lg:ml-220 flex my-4 lg:my-1 border-1 border-zinc-500 hover:bg-zinc-800/80 w-35 gap-1 rounded-2xl cursor-pointer p-3 '>
                    <UserRoundCog size={"25px"}/>
                    <p className='font-semibold'>Edit profile</p>
            </button>
            {
                isOpen && <UserEdit  />
            }
        </>
        
    )
}