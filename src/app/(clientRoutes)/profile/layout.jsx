export const metadata = {
    title: "Proflie",
  };




import { ArrowLeft,UserRoundCog,MapPin,CircleUserRound, CalendarDays } from 'lucide-react';
import Link from 'next/link';
import ProfileLinks from '../../../components/Links/ProfileLinks';
import UserEditButton from '@/components/profile/UserEditButton';
import {ProfileContentProvider} from '@/contents/ProfileContent'




  



export default function profileLayout({ children }){
   
    return(
        <ProfileContentProvider>
        <div className="w-full min-h-screen border-r-1 border-zinc-500/50 ">
            <header className="w-full h-15 backdrop-blur-2xl top-0 z-20  p-5 flex gap-5 items-center fixed ">
                <ArrowLeft size={"30px"}/>
            <h2 className="text-2xl font-bold">Kishore</h2>
            </header>
            <section className="mt-15.5  ">
                <div className="bg-zinc-800  ">
                    <div className='w-full lg:h-50 h-30' ></div>
                {/* <img src="https://pbs.twimg.com/profile_banners/1241261666278359040/1743924500/1500x500" alt="" className="w-full lg:h-50 h-30 object-cover " /> */}
                </div>
                <div className=" ml-10  -my-15 bg-zinc-900  flex justify-center items-center h-30 w-30 lg:h-40 lg:w-40 rounded-full ">
                    {/* default profile */}
                    <CircleUserRound size={"160px"} color='#71717a' />
                    {/* <img draggable="false" src="https://images.indianexpress.com/2021/03/ramcharan1200.jpeg" alt="" className="relative w-full h-full rounded-full object-cover " /> */}
                </div>
                <UserEditButton />
                <section className='mt-5 px-10 py-2 '>
                    <h3 className='text-xl font-bold text-zinc-200'>Kishore</h3>
                    <p className='text-zinc-400 text-lg mt-2 mb-4 '>@kishore</p>
                    <div className='mt-2  flex gap-3'>
                        <div className='flex gap-1'>
                            <MapPin color='#a1a1aa'/>
                        <p className='text-zinc-400'> Bangalore</p>
                        </div>
                    <div className='flex gap-1'>
                        <CalendarDays color='#a1a1aa'/>
                    <p className='text-zinc-400'>Joined on today</p>
                    </div>
                    </div>   
                </section>
                <ProfileLinks/>
                <section className='flex  gap-0.5 w-full flex-wrap '>
                    {children} 
                </section>
               
            </section>
            
        </div>
    </ProfileContentProvider>    
    )
} 