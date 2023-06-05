import LogoTime from "@/components/LogoTime"
interface LinhaProps {
    posicao: number;
    time: {
        time: string;
        p: number;
        pn: number;
        j: number;
        v: number;
        e: number;
        d: number;
        gp: number;
        gc: number;
        sg: number;
    }
}

export default function Linha({ posicao, time }: LinhaProps) {
    return (
        <div className=" flex flex-col justify-center h-12 md:hover:bg-gray-50 md:cursor-pointer">
        <div className={`
            flex flex-col justify-between text-xs md:text-base gap-2
        `}>
                <div className="flex w-full justify-between items-center">
                    <div className="flex gap-2 items-center text-black">
                        <div className="flex justify-center w-4">{`${posicao}º`}</div>
                        <LogoTime
                            time={time.time}
                            height={32}
                            width={32}
                        />
                        <div>{time.time}</div>
                    </div>
                    <div className="flex justify-between items-center w-7/12">
                        <div className="text-black flex justify-center w-6 font-bold">{time.p}</div>
                        <div className="flex justify-center w-6">{time.pn}</div>
                        <div className="flex justify-center w-6">{time.j}</div>
                        <div className="flex justify-center w-6">{time.v}</div>
                        <div className="flex justify-center w-6">{time.e}</div>
                        <div className="flex justify-center w-6">{time.d}</div>
                        <div className="flex justify-center w-6">{time.gp}</div>
                        <div className="flex justify-center w-6">{time.gc}</div>
                        <div className="flex justify-center w-6">{time.sg}</div>
                    </div>
                </div>
                <hr className="border-1 border-gray-300 w-full" />
            </div>
        </div>

    )
}