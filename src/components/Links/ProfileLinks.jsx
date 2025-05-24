 "use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'


export default function ProfileLinks(){
    const pathname = usePathname()
    return(
        <div className='w-full h-15  mt-5  flex items-center justify-between'>
                    <Link href={"/profile"} className={` ${pathname === '/profile' ? 'bg-zinc-800/50 border-b-2  border-blue-500 ' : ''}   p-2 text-xl  font-extrabold cursor-pointer flex justify-center items-center  hover:bg-zinc-800/30 h-full w-full`}>Post</Link>
                    <Link href={"/profile/media"} className={` ${pathname === '/profile/media' ? 'bg-zinc-800/50 border-b-2 border-blue-500  ' : ''}   p-2 text-xl  font-extrabold cursor-pointer flex justify-center items-center  hover:bg-zinc-800/30 h-full w-full`}>Media</Link>
                    <Link href={"/profile/followers"} className={` ${pathname === '/profile/followers' ? 'bg-zinc-800/50 border-b-2 border-blue-500  ' : ''}   p-2 text-xl  font-extrabold cursor-pointer flex justify-center items-center  hover:bg-zinc-800/30 h-full w-full`}>Followers</Link>
                    <Link href={"/profile/following"} className={` ${pathname === '/profile/following' ? 'bg-zinc-800/50 border-b-2 border-blue-500  ' : ''}   p-2 text-xl  font-extrabold cursor-pointer flex justify-center items-center  hover:bg-zinc-800/30 h-full w-full`}>Following</Link>
        </div>
    )
}