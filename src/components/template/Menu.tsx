
import MenuItem from './MenuItem'

interface MenuProps {
    children:React.ReactNode
}

export default function Menu({children}: MenuProps) {
    return (
        <div className="flex justify-between w-full md:px-10">
            {children}
        </div>
    )
}
