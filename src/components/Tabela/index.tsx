import Linha from "./Linha";
import logoinfor from "../../../public/infor-logo.svg"
import logoedif from "../../../public/edif-logo.svg"
import logoadm from "../../../public/adm-logo.svg"
import logoagro from "../../../public/agro-logo.svg"

export default function Tabela(){
    return(
        <div className={`
            flex flex-co text-neutral-400 w-full px-1 py-2

        `}>
            <div className={`flex flex-col gap-2 bg-white shadow-md w-full rounded-md p-2`}>
                <Linha 
                    cabecalho
                />
                <Linha 
                    logoTime={logoinfor}
                    nomeTime="2º INFOR"
                    numero={1}
                />
                <Linha 
                    logoTime={logoagro}
                    nomeTime="1º AGRO"
                    numero={2}
                />
                <Linha 
                    logoTime={logoedif}
                    nomeTime="3º EDIF"
                    numero={3}
                />
                <Linha 
                    logoTime={logoadm}
                    nomeTime="ADM"
                    numero={4}
                />
            </div>
        </div>
    )
}