import Link from "next/link"

interface MenuItemProps {
    children: any
    url?: string
    onClick?: () => void
    className?: string
    selecionado?: boolean
}

export default function MenuItem(props: MenuItemProps) {
        return (
            <div className={`
                    flex justify-center items-center cursor-pointer text-sm md:text-base w-24 md:w-32
                    h-8 text-white  border-white md:hover:bg-green-700 transition ease-in-out
                    ${props.className ?? ''}
                    ${props.selecionado? 'border-b-2' : ''}
                `}
                onClick={props.onClick}
            >
                <Link href={props.url ?? ''}>{props.children}</Link>
            </div>
        )
}