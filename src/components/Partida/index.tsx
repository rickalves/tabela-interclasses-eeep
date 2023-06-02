import Calendario from "./Calendario";
import Placar from "./Placar";

interface Props{
    timeA:string;
    timeB:string;
    placarA:number;
    placarB:number;
    data:string;
    hora:string;
    finalizado:boolean
    vencedor?:string
    colspan?: boolean
}

export default function Partida({ timeA, timeB, placarA, placarB, data, hora, finalizado, vencedor, colspan }:Props){
    return(
        <div className={`
            flex w-full bg-white p-4 rounded-md shadow-md mt-4
            justify-center overflow-hidden ${colspan? 'md:col-span-2' : ''}
        `}>
            <div className="flex justify-between text-sm  text-gray-500">
                <div className="flex flex-col gap-4">
                    <Placar time={timeA} placar={placarA} vencedor={vencedor === 'A'}/>
                    <Placar time={timeB} placar={placarB} vencedor={vencedor === 'B'}/>    
                </div>
                <Calendario data={data} hora={hora} finalizado={finalizado}/>
            </div>
        </div>
    )
}