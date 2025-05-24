"use client"
import { House,Search,Mail,Bot,CircleUserRound,Bell,BellDot, NotebookText } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'



const t=false;
const links = [
    {
        link: "/home",
        icon: <House size={35}  />,
        name: "Home"
    },
    {
        link: "/search",
        icon: <Search size={35} />,
        name: "Search"
    },
    {
        link: "/mail",
        icon: <Mail size={35} />,
        name: "Mail"
    },
    {
        link: "/bot",
        icon: <Bot size={35} />,
        name: "Bot"
    },
    {
        link: "/notification",
        icon: t ? <Bell size={35} /> : <BellDot size={35} />,
        name: "Notification"
    },
    {
        link: "/profile",
        icon: <CircleUserRound size={35} />,
        name: "Profile"
    },
    // {
    //     link:"/questionpapers",
    //     icon:<NotebookText size={35} />,
    //     name:"QuestionPapers"
    // }
]




export default function NavLinks(){
    const pathname = usePathname()
    return(
        <>
         {
                            links.map((link, idx) => (
                                <Link href={link.link} key={idx}  className={`${pathname.startsWith(link.link)? "bg-zinc-700/50" : "hover:bg-zinc-800/50 "} w-[12vw] md:w-fit md:p-2 lg:w-55  flex items-center  lg:gap-4 cursor-pointer lg:mb-3 px-2 lg:p-3 rounded-2xl`}>
                                    {link.icon}
                                    <p className={`text-xl hidden lg:block ${pathname.startsWith(link.link) ? "font-extrabold" : "font-semibold"}`}>{link.name}</p>
                                </Link>
                            ))
                        }
        </>
    )
}