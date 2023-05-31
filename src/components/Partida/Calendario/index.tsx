import { dataDiaMes, diaSemana } from "../../../services/datas"
interface Props {
    data: string;
    hora: string;
    finalizado: boolean;
}

export default function Calendario({ data, hora, finalizado }: Props) {
    return (
        <div className="flex gap-2 justify-evenly text-sm text-gray-700 w-40 items-center">
            <div className="border-l-2 border-gray-400 h-full">
            </div>
            <div className="flex flex-col justify-center gap-2">
                <div className={`
                    flex gap-1 justify-center font-bold
                `}>
                    <div className="font-normal">
                        {
                            finalizado ? '' : `${diaSemana(data)} |`
                        }
                    </div>
                    {`
                        ${finalizado ? 'FIM' : dataDiaMes(data)}
                    `}
                </div>
                <div className="flex justify-center gap-2">
                    <div>
                        {`
                            ${finalizado ? `${diaSemana(data)} | ${dataDiaMes(data)}`: hora}
                        `}
                    </div>
                </div>
            </div>
        </div>
    )
}