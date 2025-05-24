
"use client"

import { useMiniBotContent } from "@/contents/MiniBotContent";
import { HandleAiInputFunction } from "@/helperFunctions/AiResponse";
import { useEffect, useRef, useState } from "react"
import { useToast } from "@/contents/ToastContent";

export default function TextSelectionTooltip() {
    const [on, setOn] = useState(true)
    const [selectionText, setSelectionText] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const tooltipRef = useRef(null);

    const { showToast,setOpen } = useToast();

    //minibot contentApi
    const { toggle, setToggle, setInput, setOutput, setLoading } = useMiniBotContent()

    useEffect(() => {
        const handleMouseUp = (e) => {
            const selection = window.getSelection();
            const text = selection.toString().trim();

            if (text.length > 0) {
                const rect = selection.getRangeAt(0).getBoundingClientRect();
                setPosition({ x: rect.left + rect.width / 2, y: rect.top + window.scrollY - 10 });
                setSelectionText(text);
                setOn(true);
            } else {
                setOn(false);
            }
        };

        const handleClickOutside = (e) => {
            if (tooltipRef.current && !tooltipRef.current.contains(e.target)) {
                setOn(false);
            }
        };


        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    const handleAskAI = async () => {
        setOn(false)
        setToggle(true)
        setLoading(true)
        setOpen(false)
        const selectedText = window.getSelection()?.toString().trim();
        setInput(selectedText)
        console.log("clicked")

        try {
           
                showToast({
                    title:"Thinking...Processing ",
                     description:"Please wait for better response",
                    position:"top",
                    duration:Infinity,
                    variant:"default" ,
                   })
               
            const res = await HandleAiInputFunction(selectedText);
            setLoading(false)
            
            setOutput(res)
            setInput("")
            showToast({
                title: "Successfully Asked Ai  ",
                description: "Success ",
                position: "top-right",
                duration: 3000,
                variant: "default",
            })




        } catch (error) {
            console.error("Error in HandleAiInputFunction:", error);
        }
        finally {
            setOn(false)
        }
    }
    return on ? (

        <div

            ref={tooltipRef}
            style={{
                top: position.y,
                left: position.x,
                transform: "translate(-50%, -100%)",
            }}
            className="absolute z-[9999] flex flex-col justify-center items-center cursor-pointer  mb-2 
           transition-opacity duration-300 
           delay-0 group-hover:delay-300  " >
            <button
                onClick={handleAskAI}
                className={`
                    bg-gray-800 cursor-pointer text-white text-xs rounded px-2 py-1 
                    whitespace-nowrap `}  >
                Ask Ai
            </button>
            <span className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-gray-800"></span>
        </div>


    ) : null;
}