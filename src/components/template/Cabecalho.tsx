import logoepdjmm from '../../../public/logo_epdjmm_white.svg'
import logobola from '../../../public/ball-icon.svg'
import Image from 'next/image'

interface Props{
    children:React.ReactNode
}
export default function Cabecalho({children}:Props) {
    return (
        <header className={
            `flex flex-col justify-between items-center pt-2 pb-0 px-4
           bg-green-600 w-screen h-28 md:px-96 md:h-40 shadow-md shadow-gray-400
           sticky top-0
           `}>
            <div className='w-full flex justify-between items-center md:h-4/6'>
                <div className='flex items-center gap-2'>
                    <Image
                        src={logobola}
                        alt='logo do site'
                        className='md:h-full md:w-12'
                    />
                    <h1 className='text-white font-bold text-sm md:text-lg'>Interclasses EEEP</h1>
                </div>
                <Image
                    src={logoepdjmm}
                    height={80}
                    width={80}
                    alt='logo do site'
                    className='md:h-full md:w-44'
                />
            </div>
            {children}
        </header>
    )
}