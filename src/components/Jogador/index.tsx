import Image from "next/image";
import LogoTime from "../LogoTime";

interface Props{
    posicao: number;
    nome: string;
    time: string;
    estatistica: number;
    foto: string;
}
export default function Jogador({ posicao, nome, time, estatistica, foto }:Props){
    return(
        <div className="flex flex-col justify-between h-14 md:hover:bg-gray-50 md:cursor-pointer">
            <div className="flex justify-between items-center px-1">
                <div className="flex items-center gap-2">
                    <div className="text-sm md:text-base">{posicao}º</div>
                    <Image
                        src={foto}
                        height={48}
                        width={48}
                        alt="foto"
                    />
                    <div>
                        <div className="text-base">{nome}</div>
                        <div className="flex items-center gap-2">
                            <LogoTime
                                time={time}
                                width={18}
                                height={18}
                            />
                            <div className="text-xs text-gray-600">{time}</div>
                        </div>
                    </div>
                </div>
                <div className="text-sm md:text-base">{estatistica}</div>
            </div>
            <hr className="border-1 border-gray-300 w-full" />
        </div>
    )
}