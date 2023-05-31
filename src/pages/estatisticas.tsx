import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import Menu from '@/components/template/Menu'
import MenuItem from '@/components/template/MenuItem'
import Card from '@/components/Card'
import Jogador from '@/components/Jogador'
import { 
  carregaGols, 
  carregaCartoesAmarelos, 
  carregaCartoesVermelhos 
} from "../services/carregaDados"

export default function Estatisticas() {
  const gols = carregaGols();
  const cartoesAmarelos = carregaCartoesAmarelos();
  const cartoesVermelhos = carregaCartoesVermelhos();
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
      <Card titulo='Gols'>
          {gols.map((jogador, index) => 
              <Jogador 
                nome={jogador.nome}
                time={jogador.time}
                posicao={index + 1}
                estatistica={jogador.gols}
                foto={jogador.foto || 'foto-icon.svg'}
              />)}
      </Card>
      <Card titulo='Cartões Amarelos'>
          {cartoesAmarelos.map((jogador, index) => 
              <Jogador 
                nome={jogador.nome}
                time={jogador.time}
                posicao={index + 1}
                estatistica={jogador.cartoes}
                foto={jogador.foto || 'foto-icon.svg'}
              />)}
      </Card>
      <Card titulo='Cartões Vermelhos'>
          {cartoesVermelhos.map((jogador, index) => 
              <Jogador 
                nome={jogador.nome}
                time={jogador.time}
                posicao={index + 1}
                estatistica={jogador.cartoes}
                foto={jogador.foto || 'foto-icon.svg'}
              />)}
      </Card>
    </Pagina>
  )
}
