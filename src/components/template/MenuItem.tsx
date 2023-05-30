import Link from "next/link"

interface MenuItemProps {
    children: any
    url?: string
    onClick?: () => void
    className?: string
    selecionado?: boolean
}

export default function MenuItem(props: MenuItemProps) {
    function renderizarBotao() {
        return (
            <div className={`
                    flex justify-center items-center cursor-pointer text-xs w-24
                    h-6 text-white  border-white hover:bg-green-700 transition ease-in-out
                    ${props.className ?? ''}
                    ${props.selecionado? 'border-b-2' : ''}
                `}
                onClick={props.onClick}
            >
                {props.children}
            </div>
        )
    }

    return props.url ? (
        <Link href={props.url ?? ''}>{renderizarBotao()}</Link>
    ) : renderizarBotao()
}