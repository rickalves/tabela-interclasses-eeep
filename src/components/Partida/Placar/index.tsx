import LogoTime from "../../LogoTime";

interface Props {
    time: string;
    placar: number;
    vencedor: boolean;
}

export default function Placar({ time, placar, vencedor }: Props) {
    return (
        <div className="flex justify-between text-sm  text-gray-700 w-40 items-center">
            <div className="flex gap-2 items-center">
                <LogoTime
                    time={time}
                    height={32}
                    width={32}
                />
                <div className={`
                    ${vencedor ? 'font-bold' : ''}
                `}>{time}</div>
            </div>
            <div className={`
                    ${vencedor ? 'font-bold' : ''}
                `}>{placar}</div>
        </div>
    )
}