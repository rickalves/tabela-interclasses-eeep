import TabelaController from "@/logic/mongodb/controllers/tabelaController";
export default class CarregaDados {
  static async tabela() {
    const tabelaDB = await TabelaController.buscarTabelaAno(2023)

    const tabelaCompleta = tabelaDB.map(temporada => temporada.times.map(time => {
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
    }))


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

  static async gols() {
    // const golsOrdenado = estatistica.gols.sort((a, b) => {
    //   if (a.gols < b.gols) {
    //     return 1;
    //   }
    //   if (a.gols > b.gols) {
    //     return -1;
    //   }
    //   return 0;
    // })

    // return golsOrdenado;
  }

  static async cartoesAmarelos() {
    // const cartoesOrdenado = estatistica.cartoes_amarelos.sort((a, b) => {
    //   if (a.cartoes < b.cartoes) {
    //     return 1;
    //   }
    //   if (a.cartoes > b.cartoes) {
    //     return -1;
    //   }
    //   return 0;
    // })

    // return cartoesOrdenado;
  }

  static async cartoesVermelhos() {
    // const cartoesOrdenado = estatistica.cartoes_vermelhos.sort((a, b) => {
    //   if (a.cartoes < b.cartoes) {
    //     return 1;
    //   }
    //   if (a.cartoes > b.cartoes) {
    //     return -1;
    //   }
    //   return 0;
    // })

    // return cartoesOrdenado;
  }
}
