import Image from "next/image";

export default function HeroBubbles() {
    return (
        <div className="hidden md:inline">
            <Image src="./bubbles-svgrepo-com.svg" alt="bubble" className="absolute z-1 w-80 opacity-30 blur-[1.5px] -bottom-15 -left-60" width={500} height={500}/>
            <Image src="./bubbles-svgrepo-com.svg" alt="bubble" className="absolute z-1 w-46 opacity-30 blur-[1.5px] -bottom-20 left-22" width={500} height={500}/>
            <Image src="./bubbles-svgrepo-com.svg" alt="bubble" className="absolute z-1 w-36 opacity-30 blur-[1.5px] bottom-30 left-20" width={500} height={500}/>
            <Image src="./bubbles-svgrepo-com.svg" alt="bubble" className="absolute z-1 w-26 opacity-30 blur-[1.5px] bottom-60 -left-2" width={500} height={500}/>
            <Image src="./bubbles-svgrepo-com.svg" alt="bubble" className="absolute z-1 w-100 opacity-30 blur-[1.5px] -top-55 -right-56" width={500} height={500}/>
            <Image src="./bubbles-svgrepo-com.svg" alt="bubble" className="absolute z-1 w-60 opacity-30 blur-[1.5px] -top-40 right-50" width={500} height={500}/>
            <Image src="./bubbles-svgrepo-com.svg" alt="bubble" className="absolute z-1 w-50 opacity-30 blur-[1.5px] top-22 right-30" width={500} height={500}/>
            <Image src="./bubbles-svgrepo-com.svg" alt="bubble" className="absolute z-1 w-25 opacity-30 blur-[1.5px] top-50 -right-5" width={500} height={500}/>
        </div>
    )
}