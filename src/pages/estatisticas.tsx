import Tabela from '@/components/Tabela'
import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import Menu from '@/components/template/Menu'
import MenuItem from '@/components/template/MenuItem'

export default function Estatisticas() {
  return (
    <Pagina>
      <Cabecalho>
        <Menu>
          <MenuItem url="/">
            Classificação
          </MenuItem>
          <MenuItem url="/estatisticas" selecionado>
            Estatísticas
          </MenuItem>
          <MenuItem url="/partidas">
            Partidas
          </MenuItem>
        </Menu>
      </Cabecalho>
    </Pagina>
  )
}
