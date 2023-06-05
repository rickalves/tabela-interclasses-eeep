import Image from "next/image"
import ballIcon from "../../../public/favicon.ico"
export default function Loading() {
    return (
        <div className="flex flex-col justify-center items-center w-3/4">
            <div className="text-black">
                <Image
                    src={ballIcon}
                    alt="loading img"
                    height={40}
                    width={40}
                    className="animate-spin"
                />
            </div>
                <div className="text-center font-bold w-1/2">
                    Carregando
                    <span className="animate-ping-slow">.</span>
                    <span className="animate-ping">.</span>
                    <span className="animate-ping">.</span>
                </div>
        </div>
    )
}