import type { NextApiRequest, NextApiResponse } from 'next'
import TabelaService from "../../logic/core/tabela/TabelaService"


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const ano = new Date().getFullYear()
    TabelaService.carregaTabelaAno(ano).then(tabela => res.status(200).json(tabela))
}
