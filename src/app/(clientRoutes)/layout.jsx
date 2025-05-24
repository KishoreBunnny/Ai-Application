"use client"
import TextSelectionTooltip from "@/components/HelpersComponents/TextSelectTooltipAi"
import MoreNavLinks from "@/components/Links/MoreNavLinks"
import NavLinks from "@/components/Links/NavLinks"
import MiniBot from "@/components/miniBot/MiniBot"
import { MiniBotContentProvider } from "@/contents/MiniBotContent"





export default function HomeLayout({ children }) {

   

    return (
    <>
        <MiniBotContentProvider>
        <TextSelectionTooltip/>
        <div className="flex lg:flex-row-reverse flex-col lg:px-12 md:px-1 overflow-auto h-screen w-screen">
            <main className=' w-full  border-zinc-500/50  '>
                {children}
            </main>

            <nav className="lg:w-1/4 gap-5 w-full h-15 flex lg:block lg:h-full lg:sticky bg-zinc-950 fixed bottom-0 lg:top-0 border-zinc-500/50 border-r-1 p-1 lg:p-5 lg:pt-10  md:justify-between  ">
                <NavLinks />
                <MoreNavLinks />

            </nav>
            
            <MiniBot/>

        </div>
     </MiniBotContentProvider>   
    </>
    )
}

