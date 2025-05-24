"use client"
import { ArrowLeft, CircleUserRound, Facebook, ImagePlus, X } from "lucide-react";
import { useRef, useState } from "react";
import ProfilePhoto from "./profilePhoto";
import ProfileHeaderPhoto from "./profileHeaderPhoto";
import ProfileBio from "./profileBio";
import ProfileSave from "./profileSave";
import { useProfileContent } from "@/contents/ProfileContent";

export default function UserEdit() {
    const { isOpen, setIsOpen, profileStack, setProfileStack } = useProfileContent();
    console.log(profileStack)



    return (
        <div className="w-[100vw] h-[100vh]  lg:h-[99vh] -mt-66 flex  bg-zinc-500/20 items-center lg:-ml-90 lg:-mt-90 z-99  absolute " >
            <div className="lg:w-150 lg:ml-120 w-full h-full shadow-zinc-900 shadow-[1px_1px_15px_1px] bg-zinc-800 lg:h-150 lg:p-10 lg:rounded-xl " >

                {
                    profileStack === 4 &&

                        <button onClick={() => {
                            setIsOpen(false)
                            setProfileStack(1)
                        }}
                            className=" cursor-pointer rounded-full hover:bg-zinc-900/50 p-1 ">
                            <X />
                        </button>
                }
                {      profileStack!=4 && profileStack!=1 &&
                        <button onClick={() => {
                            setProfileStack(profileStack-1)
                        }}
                            className=" cursor-pointer rounded-full hover:bg-zinc-900/50 p-1 ">
                            <ArrowLeft />
                        </button>
                }






                <div className="flex justify-center items-center">
                    <Facebook size={"55px"} fill="#3b82f6" />
                </div>


             

                
                {
                    profileStack === 1 && <ProfilePhoto />
                }
                {
                    profileStack === 2 && <ProfileHeaderPhoto />
                }
                {
                    profileStack === 3 && <ProfileBio />
                }
                {
                    profileStack === 4 && <ProfileSave />
                }
               



                {/* <ProfilePhoto /> */}
                {/* <ProfileHeaderPhoto /> */}
                {/* <ProfileBio /> */}
                {/* <ProfileSave /> */}



            </div>
        </div>
    )
}