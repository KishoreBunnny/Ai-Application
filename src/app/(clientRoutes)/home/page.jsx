export const metadata = {
    title: "Home",
};


import { CircleUserRound } from 'lucide-react';


const navLinks = [{ name: "nextjs" },
{ name: "react" }, { name: "tailwind" }, { name: "nodejs" }, { name: "expressjs" }, { name: "mongoDB" }, { name: "postgresSQL" },
{
    name: "SpringBoot"
}
]

const posts = [
    {
        id: 1,
        image: "https://pbs.twimg.com/media/GqF0_0nXgAAIJap?format=jpg&name=medium",
        description: "Web framework update",
        question: "What is Next.js?",
        answer: "Next.js is a React framework that enables server-side rendering and static site generation for building fast and SEO-friendly web applications."
    },
    {
        id: 2,
        image: "https://pbs.twimg.com/media/GqFz82ea0AAouTv?format=jpg&name=medium",
        description: "JavaScript library spotlight",
        question: "What is React?",
        answer: "React is a JavaScript library for building user interfaces using components and a virtual DOM for efficient rendering."
    },
    {
        id: 3,
        image: "https://pbs.twimg.com/media/Gp4KJOdbAAA7jOG?format=png&name=900x900",
        description: "Styling revolution",
        question: "What is Tailwind CSS?",
        answer: "Tailwind CSS is a utility-first CSS framework that allows you to build modern user interfaces directly in your markup."
    },
    {
        id: 4,
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
        description: "Runtime environment explained",
        question: "What is Node.js?",
        answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine that lets you run JavaScript on the server side."
    },
    {
        id: 5,
        image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
        description: "Web framework essentials",
        question: "What is Express.js?",
        answer: "Express.js is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile apps."
    },
    {
        id: 6,
        image: "https://pbs.twimg.com/media/GpGgrdXa4AAUTOo?format=png&name=900x900",
        description: "NoSQL database insight",
        question: "What is MongoDB?",
        answer: "MongoDB is a document-oriented NoSQL database used for high-volume data storage, known for its flexibility and scalability."
    },
    {
        id: 7,
        image: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
        description: "Relational database foundation",
        question: "What is PostgreSQL?",
        answer: "PostgreSQL is a powerful, open-source relational database system known for its robustness, extensibility, and standards compliance."
    },
    {
        id: 8,
        image: "https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format%2Ccompress&fit=max&w=3840",
        description: "Web framework update",
        question: "What is Next.js?",
        answer: "Next.js is a React framework that enables server-side rendering and static site generation for building fast and SEO-friendly web applications."
    },
    {
        id: 9,
        image: "https://videos.openai.com/vg-assets/assets%2Ftask_01jtd5ppnrecms1fmg28rjs86w%2F1746346474_img_1.webp?st=2025-05-04T14%3A51%3A13Z&se=2025-05-10T15%3A51%3A13Z&sks=b&skt=2025-05-04T14%3A51%3A13Z&ske=2025-05-10T15%3A51%3A13Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=3D4L3cj7neQbGzYC54T8qV%2B2%2Brek1FG8Cd%2FC0bO4tms%3D&az=oaivgprodscus",
        description: "Web framework update",
        question: "What is Next.js?",
        answer: "Next.js is a React framework that enables server-side rendering and static site generation for building fast and SEO-friendly web applications."
    },
    {
        id: 10,
        image:"https://videos.openai.com/vg-assets/assets%2Ftask_01jte7mdk4fcgamt4exvj2m3gf%2F1746382034_img_1.webp?st=2025-05-04T16%3A40%3A05Z&se=2025-05-10T17%3A40%3A05Z&sks=b&skt=2025-05-04T16%3A40%3A05Z&ske=2025-05-10T17%3A40%3A05Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=8ebb0df1-a278-4e2e-9c20-f2d373479b3a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=35bXEMrua3EE%2BXVO9MiyGWxOAzJbBH7Ccs9gBaTY4oQ%3D&az=oaivgprodscus",
        description: "Web framework update",
        question: "What is Next.js?",
        answer: "Next.js is a React framework that enables server-side rendering and static site generation for building fast and SEO-friendly web applications."
    },
]




// const navLinks=[{
//     name:"dsa"
// },
// {
// name:"java"
// },
// {
//     name:"javascript"
// },
// {
//     name:"python"
// }]



export default function home() {
    return (
        <div className=" w-full min-h-screen border-r-1 border-zinc-500/50 ">
            <nav className='w-full h-16 border-b-1 border-zinc-500/50 backdrop-blur-md bg-zinc-900/50 sticky top-0 flex items-center '>
                {
                    navLinks.map((link, idx) => (<button key={idx} className={`h-full w-full ${idx === 0 && " border-b-2 border-blue-500 bg-zinc-800/50  "}  text-zinc-200 cursor-pointer   font-semibold text-xl first-letter:uppercase  hover:bg-zinc-800/30 `}>{link.name}</button>))
                }
            </nav>
            <div className='w-full h-full px-3 flex gap-3 mt-2  flex-wrap '>
                {
                    posts.map((post, idx) => {
                        return <div key={idx} className='border-1 cursor-pointer flex flex-col  rounded-md border-zinc-500/50 w-full   lg:w-[60%]    '>
                            <div className='w-full  h-15 flex items-center  px-3 mb-3  ' >
                                <div className='h-12 w-12 rounded-full bg-zinc-900'></div>
                                <div className='h-10 flex justify-center items-center p-1 text-lg text-zinc-50 font-bold  max-w-30 rounded-lg ml-2'>JavaBoy</div>
                            </div>
                            {/* <div className="  "> */}
                                <img
                                    src={post.image}
                                    alt={post.description}
                                    className=" max-w-[90%] w-[85%] shadow-md shadow-zinc-900 ml-5   lg:ml-12  border border-zinc-500 rounded-2xl    min-h-90 md:h-52  object-contain "
                                />
                            {/* </div> */}

                            <div className='flex   p-2 px-6 shadow-md mb-0.5 rounded-b border-t-1 border-zinc-500/50  gap-4 mt-5'>
                                <div className='flex flex-col items-center justify-center border-r-1 border-zinc-500 ' >
                                    <p className='font-bold text-zinc-200 '>{post.question}</p>
                                </div>
                                <div className='flex flex-col items-center justify-center border-r-1 border-zinc-500 ' >
                                    <p >{post.answer}</p>
                                </div>
                                <div className='     ' >
                                    <span className='text-sm text-zinc-500 underline ' >Desc.</span>
                                    <p className='text-zinc-400'>{post.description}</p>
                                </div>
                            </div>

                        </div>
                    })
                }
            </div>


        </div>
    )
} 