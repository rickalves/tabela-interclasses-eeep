interface CardProps{
    children:React.ReactNode;
    totalRodadas:number;
    rodada:number
}

export default function CardRodada({ children, rodada, totalRodadas}:CardProps){
    return(
        <div className="flex flex-col w-full">
            <h1 className="font-bold text-center">{`Rodada ${rodada} de ${totalRodadas}`}</h1>
            <div className={`
                flex flex-col md:grid md:grid-cols-2
                text-sm  text-gray-500 md:gap-3 md:grid-rows-3
            `}>
                {children}
            </div>
        </div>
    )
}