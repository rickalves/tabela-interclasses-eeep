import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import Menu from '@/components/template/Menu'
import MenuItem from '@/components/template/MenuItem'
import CardRodada from '@/components/CardRodada'
import Partida from '@/components/Partida'
import partidas from "../data/mocks/partidas"

export default function Partidas() {
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
        partidas.rodadas.map((rodada, index) =>
          <CardRodada rodada={index+1} totalRodadas={rodada.length}>
            {
                rodada.map(partida => 
                  <Partida
                    timeA={partida.timeA}
                    timeB={partida.timeB}
                    placarA={partida.placarA}
                    placarB={partida.placarB}
                    finalizado={partida.finalizado}
                    data={partida.data}
                    hora={partida.hora}
                    vencedor={partida.vencedor}
                  />
                )
            }
          </CardRodada>
        )
      }
    </Pagina>
  )
}
