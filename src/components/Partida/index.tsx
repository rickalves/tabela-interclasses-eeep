import Calendario from "./Calendario";
import Placar from "./Placar";

interface Props{
    timeA:string;
    timeB:string;
    placarA:number;
    placarB:number;
    data:string;
    hora:string;
    finalizado:boolean;
    vencedor?:string;
    colspan?: boolean;
    indefinido?: boolean;
    final?: boolean;
}

export default function Partida({ timeA, timeB, placarA, placarB, data, hora, finalizado, vencedor, colspan, indefinido, final }:Props){
    return(
        <div className={`
            flex w-full ${!finalizado? `bg-gray-200` : `bg-white`} p-4 rounded-md shadow-md mt-1
            justify-center overflow-hidden ${colspan? 'md:col-span-2' : ''}
            md:hover:bg-gray-50 md:cursor-pointer
        `}>
            <div className="flex justify-between text-sm  text-gray-500">
                {
                    
                    indefinido ? 
                    <div className="flex flex-col items-center gap-2">
                        <div>{timeA}</div> 
                        <div>x</div> 
                        <div>{timeB}</div> 
                    </div>
                    :
                    <div className="flex flex-col gap-4">
                        <Placar time={timeA} placar={placarA} vencedor={vencedor === 'A'} final={final}/>
                        <Placar time={timeB} placar={placarB} vencedor={vencedor === 'B'} final={final}/>    
                    </div>
                }
                <Calendario data={data} hora={hora} finalizado={finalizado}/>
            </div>
        </div>
    )
}