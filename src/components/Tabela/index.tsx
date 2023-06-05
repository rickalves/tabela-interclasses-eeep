import Linha from "./Linha";
import Legenda from "./Legenda";
import { useEffect, useState } from "react";
import { Suspense } from "react";
import Loading from "../Loading";

interface Time {
    time: string;
    p: number;
    pn: number;
    j: number;
    v: number;
    e: number;
    d: number;
    gp: number;
    gc: number;
    sg: number;
}

export default function Tabela() {
    const [tabela, setTabela] = useState(Array<Time>)
    const [isLoading, setIsLoanding] = useState(true)

    useEffect(() => {
        fetch('https://api-interclasses-app.vercel.app/api/tabela')
            .then(resp => resp.json())
            .then(tabela => {
                setTabela(tabela)
                setIsLoanding(false)
            })
            .catch(err => console.log("erro ao carregar os dados", err))
    }, [])

    return (
        isLoading ? <Loading /> : (
            <div className={`
            flex flex-co text-neutral-500 w-full px-1 py-2
        `}
            >
                <div className={`flex flex-col gap-2 bg-white shadow-md w-full rounded-md p-2 md:p-6`}>
                    <div className={`
                    flex flex-col justify-between items-center text-xs md:text-base font-bold gap-2
                `}>
                        <div className="flex w-full justify-between">
                            <div className="flex gap-2 items-center text-sm">
                                <div>TIME</div>
                            </div>
                            <div className="flex justify-between items-center w-7/12">
                                <div className="text-black flex justify-center w-6">P</div>
                                <div className="flex justify-center w-6">PN</div>
                                <div className="flex justify-center w-6">J</div>
                                <div className="flex justify-center w-6">V</div>
                                <div className="flex justify-center w-6">E</div>
                                <div className="flex justify-center w-6">D</div>
                                <div className="flex justify-center w-6">GP</div>
                                <div className="flex justify-center w-6">GC</div>
                                <div className="flex justify-center w-6">SG</div>
                            </div>
                        </div>
                        <hr className="border-1 border-gray-300 w-full" />
                    </div>
                    <div className="flex flex-col">
                        {
                            tabela.map((time, index) =>
                                <Linha
                                    key={index}
                                    posicao={index + 1}
                                    time={time}
                                />
                            )
                        }
                    </div>
                    <div className="flex flex-col bg-gray-100 text-black text-xs md:text-base p-4 rounded-md gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Legenda</h1>
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1">
                                    <Legenda
                                        titulo="(P)"
                                        descricao="Pontos"
                                    />
                                    <Legenda
                                        titulo="(PN)"
                                        descricao="Punição (-1 ponto)"
                                    />
                                    <Legenda
                                        titulo="(J)"
                                        descricao="Jogos"
                                    />
                                    <Legenda
                                        titulo="(V)"
                                        descricao="Vitórias"
                                    />
                                    <Legenda
                                        titulo="(E)"
                                        descricao="Empates"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <Legenda
                                        titulo="(D)"
                                        descricao="Derrotas"
                                    />
                                    <Legenda
                                        titulo="(GP)"
                                        descricao="Gols prol"
                                    />
                                    <Legenda
                                        titulo="(GC)"
                                        descricao="Gols contra"
                                    />
                                    <Legenda
                                        titulo="(SG)"
                                        descricao="Saldo de gols"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-bold">Observações</h1>
                            <div className="flex gap-4">
                                <div className="flex flex-col gap-1">
                                    <Legenda
                                        titulo=""
                                        descricao="Em caso de empate em pontos o saldo de gols será o critério de desempate."
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    )
}