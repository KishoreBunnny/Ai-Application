"use client"
import {Toast} from "@/components/HelpersComponents/Toast/toast";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "@/contents/ToastContent";

export default function login() {
    const [open, setOpen] = useState(false)
    const { showToast } = useToast();
    const router=useRouter()
    return (
        <>
            <div className="min-w-screen min-h-screen flex justify-center items-center">
                <div className="hidden lg:block lg:w-screen lg:h-screen bg-gray-800 absolute  "></div>
                <div className="lg:w-[33vw] w-[100vw] md:w-[50vw] lg:h-full h-[100vh] lg:rounded-[30px]  bg-zinc-900 relative lg:m-auto ">
                    <section className="p-5 w-full h-full lg:rounded-[30px] z-10 shadow-lg shadow-zinc-900 " >
                        <div className="w-full  flex flex-col justify-center px-3 gap-3 ">
                            <h2 className="font-bold text-2xl  ">Application Name</h2>
                            <p className="text-zinc-300 font-semibold ">Log in to access application services</p>
                        </div>
                        <div >
                            <form onSubmit={(e)=>{e.preventDefault()}} className="lg:p-12 p-5 py-12 flex flex-col gap-8 " >
                                <div className="flex flex-col gap-1">
                                    <label className="text-lg font-semibold text-zinc-200">UserName:</label>
                                    <input className="outline-none border-1 text-lg border-zinc-500 p-2 rounded-[12px]" type="text" placeholder="Dumpy data" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-lg font-semibold text-zinc-200">UserName:</label>
                                    <input className="outline-none border-1 text-lg border-zinc-500 p-2 rounded-[12px]" type="text" placeholder="Dumpy data" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-lg font-semibold text-zinc-200">UserName:</label>
                                    <input className="outline-none border-1 text-lg border-zinc-500 p-2 rounded-[12px]" type="text" placeholder="Dumpy data" />
                                </div>
                                <div className="w-full flex justify-center">
                                    <button onClick={()=>{
                                         showToast({
                                            title:"Success",
                                            description:"You Logged in successfully ",
                                            position:"top-right",
                                            duration:2000,
                                            variant:"default" ,
                                            // className:"text-green-600"
                                          })
                                          setOpen(false)
                                             setTimeout(() => {
                                               setOpen(true)
                                             }, 10)
                                        router.push('/home')
                                   
                                        }} className="border-1 cursor-pointer hover:bg-zinc-800 rounded-[12px] text-zinc-100 font-semibold border-zinc-400 p-3">Login In</button>
                                </div>
                                <p className="mt-5 ">New here?<span className="text-blue-400 cursor-pointer"><Link href={'/auth/register'}>Create an account</Link></span></p>
                            </form>
                        </div>
                    </section>
                </div>
                 <Toast open={open}
                    onOpenChange={setOpen}
                    title="Success"
                     description="You Logged in successfully "
                    position="top"
                    duration={2000}
                    variant="dark" 
                    // className="text-red-500"   
                />
              
            </div>
           
        </>

    )
} 