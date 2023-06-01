import Tabela from '@/components/Tabela'
import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import Menu from '@/components/template/Menu'
import MenuItem from '@/components/template/MenuItem'
import Rodape from '@/components/template/Rodape'

export default function Home() {
  return (
    <Pagina>
      <Cabecalho>
        <Menu>
          <MenuItem url="/" selecionado>
            Classificação
          </MenuItem>
          <MenuItem url="/estatisticas">
            Estatísticas
          </MenuItem>
          <MenuItem url="/partidas">
            Partidas
          </MenuItem>
        </Menu>
      </Cabecalho>
      <Tabela />
      <Rodape />
    </Pagina>
  )
}
