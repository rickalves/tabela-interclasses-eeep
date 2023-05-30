
import MenuItem from './MenuItem'

interface MenuProps {
    children:React.ReactNode
}

export default function Menu({children}: MenuProps) {
    return (
        <div className="flex justify-between w-full">
            {children}
        </div>
    )
}
