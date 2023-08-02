interface CardProps{
    children:React.ReactNode;
    totalRodadas?:number;
    rodada:number
    finais?:string
}

export default function CardRodadasFinais({ children, rodada, finais}:CardProps){
    return(
        <div className="flex flex-col w-full">
            <h1 className="font-bold text-center">
                {
                  finais === 'Final' ? `${finais}`:`${finais} - Jogo ${rodada}`
                }
            </h1>
            <div className={`
                flex flex-col md:grid md:grid-cols-2
                text-sm text-gray-500 md:gap-3 md:grid-rows-1
            `}>
                {children}
            </div>
        </div>
    )
}