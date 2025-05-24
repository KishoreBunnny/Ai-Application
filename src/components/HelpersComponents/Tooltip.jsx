export default function Tooptip({ text, up = false, down = false }) {
    return (
        // <div className="relative group inline-block"  > <-this is a raper div for group hover with same classes 


        <span className={`absolute z-99999 bottom-full left-1/2   ${down && "translate-y-16"} -translate-x-1/2 mb-2 
                    opacity-0 group-hover:opacity-100 
                    transition-opacity duration-300 
                    delay-0 group-hover:delay-300
                    bg-gray-800 text-white text-xs rounded px-2 py-1 
                    whitespace-nowrap z-10 pointer-events-none`} >
            {text}
        </span>



        //  <button></button> place your button or div or anything that you want to hover it
        // </div> 
    )
}