import TabelaController from "../../mongodb/controllers/tabelaController";
import Time from "./Time";
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
          sg: (time.gp - time.gc)
        }
      })

      const tabelaOrdenada = tabelaCompleta.sort((a:Time, b:Time):any =>{
        if (a.p < b.p) {
          return 1;
        }
        if (a.p > b.p) {
          return -1;
        }
  
        if (a.p == b.p) {
          if (a.sg < b.sg) {
            return 1;
          }
          if (a.sg > b.sg) {
            return -1;
          }
          return 0;
        }
  
      });
  
      return tabelaOrdenada;
    }
}