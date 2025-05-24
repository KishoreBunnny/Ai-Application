import { useProfileContent } from "@/contents/ProfileContent";
import { CircleUserRound, ImagePlus } from "lucide-react"
import { useRef, useState } from "react"

export default function ProfileHeaderPhoto(){
    const [profileImage, setprofileImage] = useState(null)
    const {setProfileStack}=useProfileContent();
        const imageRef = useRef()
        const handleProfileImage = () => {
            if (imageRef.current) {
    
                imageRef.current.click()
    
            }
    
        }
    
        const handleFileChange = (e) => {
            const file = e.target.files[0]
            if (file) {
                setprofileImage(URL.createObjectURL(file))
            }
    
    
        }
    
        const handleSkipAndNext = () => {
            setProfileStack(3)
        }
    return(
        <>
        <div className="flex flex-col justify-center  items-center mt-5 ">
                    <h2 className="text-2xl font-bold">Pick a header</h2>
                    <p className="text-zinc-500">People who visit your profile will see it. Show your style.</p>
                </div>
            <div className="flex justify-center  items-center mt-10 ">
            <div className=" bg-zinc-700 w-full lg:h-50 h-30  ">
                        <div onClick={handleProfileImage} className="bg-zinc-800/20 w-full lg:h-50 h-30 cursor-pointer   ">

                        {
                            profileImage ?  <img src={profileImage}  alt="" className="w-full lg:h-50 h-30 object-cover " /> :
                         
                            <div className="flex justify-center items-center  " >
                                <ImagePlus size={"45px"} color="#a1a1aa" className=" mt-20  " />
                            </div>
                        }

                           
                            
                            <input onChange={handleFileChange} accept="image/*" type="file" ref={imageRef} className="hidden" />
                        </div>
                         <div className=" ml-10  -my-15 bg-zinc-900  flex justify-center items-center h-30 w-30 lg:h-40 lg:w-40 rounded-full ">
                            {/* default profile */}
                            {/* <CircleUserRound size={"160px"} color='#71717a' /> */}
                            <img src="https://images.indianexpress.com/2021/03/ramcharan1200.jpeg" alt="" className="relative w-full h-full rounded-full object-cover " />
                        </div> 
                    </div>
            </div>
            <div className="flex justify-center items-center mt-20  ">
                
                        <button onClick={handleSkipAndNext} className={`p-3 border-2  border-zinc-300 cursor-pointer text-xl font-semibold rounded-full ${!profileImage? "hover:bg-zinc-700/30  ": "bg-zinc-200 px-7  text-zinc-900  hover:bg-zinc-200/90" }  `} >{ !profileImage ? "Skip for now":"Next"}</button>

            </div>

        </>
    )
}