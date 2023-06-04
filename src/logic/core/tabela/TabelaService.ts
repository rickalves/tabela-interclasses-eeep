import TabelaController from "../../mongodb/controllers/tabelaController";
export default class TabelaService {
    
  static async carregaTabelaAno(ano:number) {
      const tabelaDB = await TabelaController.buscarTabelaAno(ano)
      const tabelaCompleta = tabelaDB.times.map(time => {
        return {
          time: time.time,
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
  
  
      // const tabelaOrdenada = tabelaCompleta.sort(function(a, b){
      //   if (a.p < b.p) {
      //     return 1;
      //   }
      //   if (a.p > b.p) {
      //     return -1;
      //   }
  
      //   if (a.p == b.p) {
      //     if (a.gs < b.gs) {
      //       return 1;
      //     }
      //     if (a.gs > b.gs) {
      //       return -1;
      //     }
      //     return 0;
      //   }
  
      // });
  
      return tabelaCompleta;
    }
}