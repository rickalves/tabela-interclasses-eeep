import Tabela from "@/logic/core/tabela/Tabela"
import tabela from "../model/Tabela"


export default class TabelaController{
  
    static async buscarTabelaAno(ano:Number):Promise<Tabela>{
        const tabelaBD = await tabela();
        const resultado = await tabelaBD.findOne({ temporada:ano })
        return resultado
    }

    // static async cadastrarTabela(){
    //     let novaTabela = new tabela({
    //         temporada:2023,
    //         times:[
    //             {
    //                 time: " 1º INFOR",
    //                 pn: 0,
    //                 v: 1,
    //                 e: 1,
    //                 d: 1,
    //                 gp: 10,
    //                 gc: 4,
    //             },
    //             {
    //                 time: "2º INFOR",
    //                 pn: 0,
    //                 v: 1,
    //                 e: 1,
    //                 d: 1,
    //                 gp: 10,
    //                 gc: 4,
    //             },
    //         ]
            
    //     });
    //     novaTabela.save()
    // }
}