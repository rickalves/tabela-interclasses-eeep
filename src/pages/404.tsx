import Pagina from '@/components/template/Pagina'
import Link from 'next/link'
import Image from 'next/image'
import ballicon from '../../public/ball-icon.svg'



export default function Partidas() {
    return (
        <Pagina>
            <div className='flex flex-col items-center p-6 h-screen gap-2'>
                <div className='text-9xl font-bold text-green-700'>404</div>
                <h1 className='text-xl text-gray-700'>Página não Encontrada!</h1>

                <Link href="/">
                    <div className={`
                        bg-gray-400 px-6 py-2 rounded-md text-white cursor-pointer
                        hover:bg-green-600 transition-all ease-in-out
                    `}>
                        Página Inicial
                    </div> 
                </Link>
            </div>
        </Pagina>
    )
}
