import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import Menu from '@/components/template/Menu'
import MenuItem from '@/components/template/MenuItem'
import CardRodada from '@/components/CardRodada'
import Partida from '@/components/Partida'
import Rodape from '@/components/template/Rodape'
import { useEffect, useState } from 'react'
import Loading from '@/components/Loading'

interface Partida{
  _id?:any;
  timeA:string;
  timeB:string;
  placarA:number;
  placarB:number;
  data:string;
  hora:string;
  finalizado:boolean
  vencedor:string
}



export default function Partidas() {
  const [isLoading, setIsLoanding] = useState(true)
  const [partidas, setPartidas] = useState({
      _id:"",
      temporada:0,
      rodadas:[[]]
  })

  useEffect(()=>{
    fetch('https://api-interclasses-app.vercel.app/api/partidas')
        .then(resp => resp.json())
        .then(partidas => {
          setPartidas(partidas)
          setIsLoanding(false)
        })
        .catch(err => console.log("erro ao carregar os dados", err))
  },[])

  return (
    <Pagina>
      <Cabecalho>
        <Menu>
          <MenuItem url="/">
            Classificação
          </MenuItem>
          <MenuItem url="/estatisticas">
            Estatísticas
          </MenuItem>
          <MenuItem url="/partidas" selecionado>
            Partidas
          </MenuItem>
        </Menu>
      </Cabecalho>
      {
        isLoading ? <Loading /> : 
        partidas.rodadas.map((rodada, index) =>
          <CardRodada rodada={index+1} totalRodadas={rodada.length} key={index}>
            {
                rodada.map((partida:Partida, index:number) => 
                  <Partida
                    key={index}
                    timeA={partida.timeA}
                    timeB={partida.timeB}
                    placarA={partida.placarA}
                    placarB={partida.placarB}
                    finalizado={partida.finalizado}
                    data={partida.data}
                    hora={partida.hora}
                    vencedor={partida.vencedor}
                    colspan={index == rodada.length-1 && rodada.length == 5? true : false}
                  />
                )
            }
          </CardRodada>
        )
      }
      <Rodape />
    </Pagina>
  )
}
