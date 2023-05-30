import LogoTime from "@/components/LogoTime"

interface LinhaProps {
    cabecalho?: boolean
    numero?: number
    logoTime?: string
    nomeTime?: string
}

export default function Linha({numero, cabecalho, logoTime, nomeTime }: LinhaProps) {
     return cabecalho ? (
        <div className={`
            flex flex-col justify-between items-center text-xs font-bold gap-2
        `}>
            <div className="flex w-full justify-between">
                <div className="flex gap-2 items-center">
                    <div>Time</div>
                </div>
                <div className="flex justify-center items-center w-7/12">
                    <div className="text-black flex justify-center w-6">P</div>
                    <div className="flex justify-center w-6">PN</div>
                    <div className="flex justify-center w-6">J</div>
                    <div className="flex justify-center w-6">V</div>
                    <div className="flex justify-center w-6">E</div>
                    <div className="flex justify-center w-6">D</div>
                    <div className="flex justify-center w-6">GP</div>
                    <div className="flex justify-center w-6">GC</div>
                    <div className="flex justify-center w-6">GS</div>
                </div>
            </div>
            <hr className="border-1 border-gray-300 w-full"/> 
        </div>
    ) : (
        <div className={`
            flex flex-col justify-between items-center text-xs font-bold gap-2
        `}>
            <div className="flex w-full justify-between">
                <div className="flex gap-1 items-center">
                    <div className="flex justify-center w-4">{`${numero}º`}</div>
                    <LogoTime
                        src={logoTime}
                        height={32}
                        width={32}
                    />
                    <div>{nomeTime}</div>
                </div>
                <div className="flex justify-between items-center w-7/12">
                    <div className="text-black flex justify-center w-6">00</div>
                    <div className="flex justify-center w-6">0</div>
                    <div className="flex justify-center w-6">0</div>
                    <div className="flex justify-center w-6">0</div>
                    <div className="flex justify-center w-6">0</div>
                    <div className="flex justify-center w-6">0</div>
                    <div className="flex justify-center w-6">0</div>
                    <div className="flex justify-center w-6">0</div>
                    <div className="flex justify-center w-6">0</div>
                </div>
            </div>
            <hr className="border-1 border-gray-300 w-full"/> 
        </div>
    )
}