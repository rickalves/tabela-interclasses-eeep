interface CardProps{
    children:React.ReactNode;
    titulo: string;
}

export default function Card({ children, titulo}:CardProps){
    return(
        <div className="flex flex-col w-full bg-white p-4 rounded-md shadow-md gap-2 mt-4 ">
            <h1 className="font-bold">{titulo}</h1>
            <div className="flex justify-between text-sm  text-gray-500">
                <span>Jogador</span>
                <span>{titulo}</span>
            </div>
            <hr className="border-1 border-gray-300 w-full" />
            {children}
        </div>
    )
}