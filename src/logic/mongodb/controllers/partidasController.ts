import partidas from "../model/Partidas"

export default class PartidaController{

   static async buscarPartidas(){
        return await partidas.find().then(partidas => partidas);
    }

    static async buscarPartidasAno (ano:number){
        const query = partidas.find({ temporada:ano })
        return await query.exec()
    }

    static cadastrarPartidas(){
        let novaPartida = new partidas({
            temporada:2023,
            rodadas:[
                [
                  {
                    timeA: "INFOR 2º",
                    timeB: "AGRO 3º",
                    placarA: 3,
                    placarB: 2,
                    data:"18/05/2023",
                    hora:"12:15",
                    finalizado: true,
                    vencedor:"A",
                  }  
                ]
            ]
        });

        novaPartida.save()
    }
}