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
}

export default function Partida({ timeA, timeB, placarA, placarB, data, hora, finalizado, vencedor }:Props){
    return(
        <div className="flex flex-col w-full bg-white p-4 rounded-md shadow-md gap-2 mt-4">
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