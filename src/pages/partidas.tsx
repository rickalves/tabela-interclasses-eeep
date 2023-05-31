import Tabela from '@/components/Tabela'
import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import Menu from '@/components/template/Menu'
import MenuItem from '@/components/template/MenuItem'
import CardRodada from '@/components/CardRodada'
import Partida from '@/components/Partida'

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
      <CardRodada rodada={1} totalRodadas={6}>
        <Partida
          timeA='INFOR 3º'
          timeB='AGRO 2º'
          placarA={3}
          placarB={2}
          finalizado={true}
          data='18/05/2023'
          hora='12:15'
          vencedor='A'
        />
        <Partida
          timeA='EDIF 1º'
          timeB='AGRO 2º'
          placarA={0}
          placarB={0}
          finalizado={false}
          data='09/05/2023'
          hora='12:15'
          vencedor=''
        />
      </CardRodada>
      <CardRodada rodada={2} totalRodadas={6}>
        <Partida
          timeA='INFOR 3º'
          timeB='AGRO 2º'
          placarA={3}
          placarB={2}
          finalizado={true}
          data='18/05/2023'
          hora='12:15'
          vencedor='A'
        />
        <Partida
          timeA='EDIF 1º'
          timeB='AGRO 2º'
          placarA={0}
          placarB={0}
          finalizado={false}
          data='09/05/2023'
          hora='12:15'
          vencedor=''
        />
      </CardRodada>
    </Pagina>
  )
}
