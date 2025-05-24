// export const metadata = {
//     title: "Notification",
//   };

"use client"

import { Toast } from "@/components/HelpersComponents/Toast/toast"
import { useToast } from "@/contents/ToastContent"
import { useState } from "react"

export default function Notification(){
    const [open,setOpen]=useState(false) //for Toast

    const { showToast } = useToast();

    const showToasT = () => {
        // Reset open state quickly to re-trigger toast
        setOpen(false)
        // Reopen after short delay
        setTimeout(() => {
          setOpen(true)
        }, 10)
      }
    
    return(
      <div className=" w-full min-h-screen border-r-1 border-zinc-500/50 bg-gray-800 ">
            <h1>notification page</h1>
            <button onClick={showToasT} className="p-3 text-lg font-bold mt-50 ml-30 lg:ml-100 cursor-pointer bg-zinc-950 hover:bg-zinc-900 rounded-xl " >Show toast</button>

             <Toast open={open}
                        onOpenChange={setOpen}
                        title="Success!"
                        description="Your data has been saved successfully."
                        variant="default"
                        position="bottom-left" 
                            
            />
            <Toast open={open}
                        onOpenChange={setOpen}
                        title="Success!"
                        description="Your data has been saved successfully."
                        variant="default"
                        position="bottom-right" 
                            
            />
            <Toast open={open}
                        onOpenChange={setOpen}
                        title="Success!"
                        description="Your data has been saved successfully."
                        variant="default"
                        position="bottom" 
                            
            />
                                
            <Toast open={open}
                        onOpenChange={setOpen}
                        title="Success!"
                        description="Your data has been saved successfully."
                        variant="default"
                        position="top-left" 
                            
            />
            <Toast open={open}
                        onOpenChange={setOpen}
                        title="Success!"
                        description="Your data has been saved successfully."
                        variant="dark"
                        position="top" 
                            
            />
            <Toast open={open}
                        onOpenChange={setOpen}
                        title="Error!"
                        description="Could save data."
                        variant="destructive"
                        position="top-right" 
                            
             >Somthing </Toast> 



            <button onClick={()=>{
                  showToast({
                    title:"Success",
                    description:"You Logged in successfully ",
                    position:"top-right",
                    duration:2000,
                    variant:"dark" ,
                  })
            }}
            className="p-3 text-lg font-bold mt-50 ml-30 lg:ml-100 cursor-pointer bg-zinc-950 hover:bg-zinc-900 rounded-xl "
            >
            Show Hook toast</button>


        
        </div>
    )
} 