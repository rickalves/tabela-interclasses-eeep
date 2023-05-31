import tabela from "../data/mocks/tabela";
import estatistica from "../data/mocks/estatisticas"
import estatisticas from "../data/mocks/estatisticas";


export const carregaTabela = () => {

  const tabelaCompleta = tabela.times.map(time => {
    return {
      nome: time.time,
      p: (time.v * 3 + time.e - time.pn),
      pn: time.pn,
      j: (time.v + time.e + time.d),
      v: time.v,
      e: time.e,
      d: time.d,
      gp: time.gp,
      gc: time.gc,
      gs: (time.gp - time.gc)
    }
  })

  const tabelaOrdenada = tabelaCompleta.sort(function (a, b) {
    if (a.p < b.p) {
      return 1;
    }
    if (a.p > b.p) {
      return -1;
    }

    if (a.p == b.p) {
      if (a.gs < b.gs) {
        return 1;
      }
      if (a.gs > b.gs) {
        return -1;
      }
      return 0;
    }

  });

  return tabelaOrdenada;
}

export const carregaGols = () => {
 
  const golsOrdenado = estatistica.gols.sort((a, b) => {
    if (a.gols < b.gols) {
      return 1;
    }
    if (a.gols > b.gols) {
      return -1;
    }
    return 0;
  })

  return golsOrdenado;
}

export const carregaCartoesAmarelos = () => {
  const cartoesOrdenado = estatistica.cartoes_amarelos.sort((a, b) => {
    if (a.cartoes < b.cartoes) {
      return 1;
    }
    if (a.cartoes > b.cartoes) {
      return -1;
    }
    return 0;
  })

  return cartoesOrdenado;
}

export const carregaCartoesVermelhos = () => {
  const cartoesOrdenado = estatistica.cartoes_vermelhos.sort((a, b) => {
    if (a.cartoes < b.cartoes) {
      return 1;
    }
    if (a.cartoes > b.cartoes) {
      return -1;
    }
    return 0;
  })

  return cartoesOrdenado;
}

