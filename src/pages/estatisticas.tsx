import Pagina from '@/components/template/Pagina'
import Cabecalho from '@/components/template/Cabecalho'
import Menu from '@/components/template/Menu'
import MenuItem from '@/components/template/MenuItem'
import Card from '@/components/Card'
import Jogador from '@/components/Jogador'
import Rodape from '@/components/template/Rodape'
import { useState, useEffect } from 'react'
import Loading from '@/components/Loading'

interface GolsType {
  _id?: any;
  nome: string;
  time: string;
  gols: number;
  foto: string
}

interface Cartoes {
  _id?: any;
  nome: string;
  time: string;
  cartoes: number;
  foto: string
}

export default function Estatisticas() {
  const [isLoading, setIsLoanding] = useState(true)
  const [gols, setGols] = useState(Array<GolsType>)
  const [cartoesAmarelos, setCartoesAmarelos] = useState(Array<Cartoes>)
  const [cartoesVermelhos, setCartoesVermelhos] = useState(Array<Cartoes>)

  useEffect(() => {
    fetch('https://api-interclasses-app.vercel.app/api/estatisticas')
      .then(resp => resp.json())
      .then(estatisticas => {
        setGols(estatisticas.gols)
        setCartoesAmarelos(estatisticas.cartoes_amarelos)
        setCartoesVermelhos(estatisticas.cartoes_vermelhos)
        setIsLoanding(false)
      })
      .catch(err => console.log("erro ao carregar os dados", err))
  }, [])

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
      {
        isLoading ? <Loading /> :
          <>
            <Card titulo='Gols'>
              {gols.map((jogador, index) =>
                <Jogador
                  key={index}
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
                  key={index}
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
                  key={index}
                  nome={jogador.nome}
                  time={jogador.time}
                  posicao={index + 1}
                  estatistica={jogador.cartoes}
                  foto={jogador.foto || 'foto-icon.svg'}
                />)}
            </Card>
          </>
      }
      <Rodape />
    </Pagina>
  )
}
