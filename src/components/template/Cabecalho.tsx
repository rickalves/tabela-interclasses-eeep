import logoepdjmm from '../../../public/logo_epdjmm_white.svg'
import logobola from '../../../public/ball-icon.svg'
import Image from 'next/image'

interface Props{
    children:React.ReactNode
}
export default function Cabecalho({children}:Props) {
    return (
        <header className={`flex flex-col justify-between items-center pt-2 pb-0 px-4
                         bg-green-600 w-screen h-28`}>
            <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                    <Image
                        src={logobola}
                        width={24}
                        height={24}
                        alt='logo do site'
                    />
                    <h1 className='text-white font-bold text-sm'>Interclasses EEEP</h1>
                </div>
                <Image
                    src={logoepdjmm}
                    width={72}
                    height={72}
                    alt='logo do site'
                />
            </div>
            {children}
        </header>
    )
}