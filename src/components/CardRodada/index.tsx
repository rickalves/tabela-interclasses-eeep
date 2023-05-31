interface CardProps{
    children:React.ReactNode;
    totalRodadas:number;
    rodada:number
}

export default function CardRodada({ children, rodada, totalRodadas}:CardProps){
    return(
        <div className="flex flex-col w-full">
            <h1 className="font-bold text-center">{`Rodada ${rodada} de ${totalRodadas}`}</h1>
            <div className="flex flex-col justify-between text-sm  text-gray-500">
                {children}
            </div>
        </div>
    )
}