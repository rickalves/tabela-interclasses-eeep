import Image from "next/image"
interface LogoProps{
    time:string;
    height:number;
    width:number;
}

export default function LogoTime({time, height, width}:LogoProps){
    const logoTime = time.split(" ").length > 1 ? 
    `/${time.split(" ")[1].toLowerCase()}-logo.svg`:
    `/${time.split(" ")[0].toLowerCase()}-logo.svg`
    
    return(
        <Image 
            src={logoTime}
            height={height}
            width={width}
            alt="logo do time"
        />
    )
}