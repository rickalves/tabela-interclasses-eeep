import Image from "next/image"
interface LogoProps{
    src:any
    height:any
    width:any
}

export default function LogoTime({src, height, width}:LogoProps){
    return(
        <Image 
            src={src}
            height={height}
            width={width}
            alt="logo do time"
        />
    )
}