// "use client"
import { useProfileContent } from "@/contents/ProfileContent";
import { CircleUserRound, ImagePlus } from "lucide-react"
import { useRef, useState } from "react"


export default function ProfilePhoto() {
   
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
        setProfileStack(2)
    }

  

    return (
        <>
        <div className="flex flex-col justify-center  items-center mt-5 ">
                    <h2 className="text-2xl font-bold">Pick a profile picture</h2>
                    <p className="text-zinc-500">Have a favorite selfie? Upload it now.</p>
                </div>
            <div className="flex justify-center  items-center mt-15 ">
                <div onClick={handleProfileImage} className="h-30 w-30 lg:h-40 lg:w-40   bg-zinc-700 rounded-full cursor-pointer ">
                    {
                        profileImage ? <img className=" border-3 border-zinc-200  object-cover h-30 w-30 lg:h-40 lg:w-40 rounded-full " src={profileImage} alt="" /> :
                            <div>
                                <CircleUserRound size={"160px"} className=" absolute w-30 h-30 lg:h-40 lg:w-40 " color='#71717a' />
                                <ImagePlus size={"45px"} color="#a1a1aa" className=" absolute " />
                            </div>

                    }
                    <input onChange={handleFileChange} accept="image/*" type="file" ref={imageRef} className="hidden" />
                </div>
            </div>
            <div className="flex justify-center items-center mt-33.5  ">
                <button onClick={handleSkipAndNext} className={`p-3 border-2  border-zinc-300 cursor-pointer text-xl font-semibold rounded-full ${!profileImage? "hover:bg-zinc-700/30  ": "bg-zinc-200 px-7  text-zinc-900  hover:bg-zinc-200/90" }  `} >{ !profileImage ? "Skip for now":"Next"}</button>

            </div>
            

        </>
    )
}