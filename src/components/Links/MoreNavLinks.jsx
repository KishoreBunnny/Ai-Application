"use client"
import { CircleEllipsis, NotebookText, Settings } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import OnClickAnyWhereGone from "@/helperFunctions/OnclickGone"


const moreLinks = [
    {
        link: "/questionpapers",
        icon: <NotebookText size={30} />,
        name: "Previous Year Question Papers"
    },
    {
        link: "/profile",
        icon: <NotebookText size={30} />,
        name: "sample"
    },
    {
        link: "/home",
        icon: <NotebookText size={30} />,
        name: "sample"
    },
    {
        link: "/bot",
        icon: <NotebookText size={30} />,
        name: "sample"
    },
    {
        link: "/mail",
        icon: <NotebookText size={30} />,
        name: "sample"
    },
    {
        link: "/settings",
        icon: <Settings size={30} />,
        name: "Settings"
    }
]


export default function MoreNavLinks() {
    const [toggle, setToggle] = useState(false)
    const sectionRef = useRef(null);

    OnClickAnyWhereGone(sectionRef,setToggle)
    
    return (
        <div ref={sectionRef} className=" hidden lg:block md:block " >
            <button onClick={() => {
                if (toggle) return setToggle(false)
                setToggle(true)

            }} className=" hover:bg-zinc-800/50  w-[12vw] md:w-fit md:p-2 lg:w-55  flex items-center  lg:gap-4 cursor-pointer lg:mb-3 px-2 lg:p-3 rounded-2xl">
                <CircleEllipsis size={35} />
                <p className={`text-xl hidden lg:block  font-extrabold  "font-semibold}`}>More</p>
            </button>

            {
                toggle &&

              
                <section   onClick={() => setToggle(false)} className="w-70 h-60   lg:translate-x-0 md:-translate-x-[240px] md:-translate-y-[300px] absolute lg:-translate-y-6  overflow-y-auto   rounded-2xl shadow-zinc-700 shadow-[1px_1px_15px_1px] scrollbar-hidden bg-zinc-900 " >
                    {
                        moreLinks.map((link, idx) => {
                            return (<Link key={idx} href={link.link} className="   hover:bg-zinc-800/50  w-[12vw] md:w-fit md:p-2 lg:w-full  flex items-center  lg:gap-4 cursor-pointer px-2 lg:p-3 ">
                                {link.icon}
                                <p className="text-xl hidden md:block lg:block  font-extrabold ">{link.name}</p>
                            </Link>)
                        })
                    }
                </section>

            }
        </div>
    )
}