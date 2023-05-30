interface PaginaProps {
    externa?: boolean
    children: any
    className?: string
}

export default function Pagina(props: PaginaProps) {
    return (
        <div className={`
                flex flex-col min-h-screen items-center
                bg-gray-100
                ${props.className ?? ''}
            `}>
            {props.children}
        </div>
    )
}