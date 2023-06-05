import Tabela from "@/logic/core/tabela/Tabela"
import tabela from "../model/Tabela"
import { IncomingHttpHeaders, OutgoingHttpHeader } from "http";
import { HTTP_METHOD } from "next/dist/server/web/http";


export default class TabelaController{
  
    static async buscarTabelaAno(ano:Number):Promise<Tabela>{
        const tabelaBD = await tabela();
        const resultado = await tabelaBD.findOne({ temporada:ano })
        return resultado
    }
    
    static async cadastrarTabela(){
        const tabelaBD = await tabela();
        let novaTabela = new tabelaBD({
            temporada:2023,
            times:[
                {
                    time: "2º AGRO",
                    pn: 1,
                    v: 4,
                    e: 1,
                    d: 0,
                    gp: 33,
                    gc: 9,
                },
                {
                    time: "1º AGRO",
                    pn: 0,
                    v: 3,
                    e: 1,
                    d: 1,
                    gp: 15,
                    gc: 10,
                },
                {
                    time: "ADM",
                    pn: 0,
                    v: 3,
                    e: 0,
                    d: 1,
                    gp: 12,
                    gc: 7,
                },
                {
                    time: "3º INFOR",
                    pn: 1,
                    v: 2,
                    e: 2,
                    d: 1,
                    gp: 21,
                    gc: 12,
                },
                {
                    time: "1º INFOR",
                    pn: 0,
                    v: 2,
                    e: 1,
                    d: 1,
                    gp: 11,
                    gc: 6,
                },
                {
                    time: "3º EDIF",
                    pn: 0,
                    v: 1,
                    e: 2,
                    d: 2,
                    gp: 8,
                    gc: 10,
                },
                {
                    time: "3º AGRO",
                    pn: 0,
                    v: 1,
                    e: 2,
                    d: 1,
                    gp: 8,
                    gc: 10,
                },
                {
                    time: "2º EDIF",
                    pn: 0,
                    v: 1,
                    e: 1,
                    d: 2,
                    gp: 7,
                    gc: 11,
                },
                {
                    time: "1º EDIF",
                    pn: 0,
                    v: 1,
                    e: 0,
                    d: 4,
                    gp: 5,
                    gc: 18,
                },
                {
                    time: "2º INFOR",
                    pn: 0,
                    v: 0,
                    e: 0,
                    d: 5,
                    gp: 2,
                    gc: 27,
                },
            ]
            
        });
        
        novaTabela.save()
    }
}