"use client"

//  example usage
//  <Toast open={open}
//        onOpenChange={setOpen}
//        title="Success!"
//        description="Your data has been saved successfully."
//        variant="default" // many variant like dark ,default , destructive
//        position="botton-left"// many positions like bottom-left,top-left,top,bottom
//        className="text-green-600"  //custom classNames
//           
//    />

// example of toast coming again and again
// const showToast = () => {
//   // Reset open state quickly to re-trigger toast
//   setOpen(false)
//   // Reopen after short delay
//   setTimeout(() => {
//     setOpen(true)
//   }, 10)
// }


//example usage of all over app using context api
// const { showToast } = useToast(); //import { useToast } from "@/contents/ToastContent";
//  <button onClick={()=>{
//       showToast({
//         title:"Success",
//         description:"You Logged in successfully ",
//         position:"top-right",
//         duration:2000,
//         variant:"default" ,
//         className:"text-green-600"
//       })
//  }}>  



import * as ToastPrimitive from "@radix-ui/react-toast"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import React from "react"




interface CustomToastProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  title?: string
  description?: string
  variant?: "default" | "destructive" | "dark"
  duration?: number
  position?:string
  className?:string
}



export function Toast({
  open,
  onOpenChange,
  title,
  description,
  variant = "default",
  duration = 3000,
  position = "bottom-right",
  className,
}: CustomToastProps) {
  return (
    <ToastPrimitive.Provider swipeDirection="right" duration={duration}
    >
      <ToastPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        className={cn(
          `group pointer-events-auto relative shadow-zinc-900 flex lg:w-[25vw] w-[90vw] max-w-sm items-start justify-between space-x-2 overflow-hidden rounded-[12px] border-none p-4 pr-6 shadow-md transition-all data-[state=open]:animate-in data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-bottom-full`,

          "data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none",
          "data-[swipe=cancel]:translate-x-0 data-[swipe=cancel]:transition-all",
          "data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=end]:transition-all data-[swipe=end]:duration-300 data-[swipe=end]:ease-out",
          


          (!open && (position==="top" || position==="top-right" || position==="top-left" ) ) && "animate-out-to-top ",
          (position==="top" || position==="top-right" || position==="top-left" )&& "animate-in-from-top "  ,
          (!open && (position==="bottom" || position==="bottom-right" || position==="bottom-left")  ) && "animate-out-to-bottom",
          (position==="bottom" || position==="bottom-right" || position==="bottom-left" ) && "animate-in-from-bottom" ,
    





          variant === "destructive" && "border-red-800  bg-red-800 text-zinc-200  ",
          variant === "default" &&   "border bg-zinc-200 text-zinc-950 ",
          variant === "dark" && "bg-zinc-900 text-zinc-100   " ,
          className,
          
        )  }
      >
        <div className="flex flex-col gap-1 text-sm">
          {title && <div className="font-semibold  ">{title}</div>}
          {description && <div className="opacity-90">{description}</div>}
        </div>

        <ToastPrimitive.Close className={`absolute opacity-0 group-hover:delay-0 group-hover:opacity-100  right-2 top-2 rounded-md p-1 ${variant==="default" ? "text-zinc-900/50 hover:text-zinc-950 ": " text-zinc-300 hover:text-zinc-100 "  }  transition-opacity  focus:outline-none cursor-pointer `}>
          <X className="h-4 w-4" />
        </ToastPrimitive.Close>
      </ToastPrimitive.Root>

      <ToastPrimitive.Viewport className={`fixed
         ${position=== "bottom-right" && "bottom-4 lg:right-4 lg:left-auto lg:transform-none lg:translate-0  left-[50%] transform -translate-x-1/2  " } 
         ${position=== "bottom-left" && "bottom-4 lg:left-4  lg:transform-none lg:translate-0  left-[50%] transform -translate-x-1/2   " }
         ${position=== "top-right" && "top-4 lg:right-4  lg:left-auto lg:transform-none lg:translate-0  left-[50%] transform -translate-x-1/2  " }
         ${position=== "top-left" && "top-4 lg:left-4  lg:transform-none lg:translate-0  left-[50%] transform -translate-x-1/2   " }
         ${position=== "bottom" && "bottom-4 left-[50%] transform -translate-x-1/2" }
         ${position=== "top" && "top-4 left-[50%] transform -translate-x-1/2" }
        z-[100] flex flex-col-reverse gap-1` }/>
    </ToastPrimitive.Provider>
  )
}

