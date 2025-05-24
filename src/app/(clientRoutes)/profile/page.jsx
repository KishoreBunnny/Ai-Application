export const metadata = {
    title: "Profile",
  };


  

const img=[
    {
      "title": "Random Image 1",
      "url": "https://picsum.photos/id/1011/800/600"
    },
    {
      "title": "Random Image 2",
      "url": "https://picsum.photos/id/1025/800/600"
    },
    {
      "title": "Random Image 3",
      "url": "https://picsum.photos/id/1035/800/600"
    },
    {
      "title": "Random Image 4",
      "url": "https://picsum.photos/id/1043/800/600"
    },
    {
      "title": "Random Image 5",
      "url": "https://picsum.photos/id/1050/800/600"
    },
    {
      "title": "Random Image 6",
      "url": "https://picsum.photos/id/1062/800/600"
    },
    {
      "title": "Random Image 7",
      "url": "https://picsum.photos/id/1074/800/600"
    },
    {
      "title": "Random Image 8",
      "url": "https://picsum.photos/id/1084/800/600"
    },
    {
      "title": "Random Image 9",
      "url": "https://picsum.photos/id/1080/800/600"
    },
    {
      "title": "Random Image 10",
      "url": "https://picsum.photos/id/109/800/600"
    }
  ]
  



 export default function profile(){
    return(
        <div className="flex pt-2 items-center gap-0.5 w-full flex-wrap ">
        {
                       img.map((i,idx)=>{
                           return <div key={idx} className='w-35 lg:w-88  bg-zinc-700'> <img src={i.url} alt="images" /> </div>
                       })
         }
     </div>
    )
 } 