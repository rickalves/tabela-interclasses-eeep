import Rodape from "./Rodape"

interface PaginaProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
                flex flex-col h-screen items-center justify-between gap-2 md:px-96
                bg-gray-100 overflow-x-hidden relative px-2
                ${props.className ?? ''}
        `}>
            {props.children}
        </div>
    )
}