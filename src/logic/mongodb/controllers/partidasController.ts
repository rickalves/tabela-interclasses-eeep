import partidas from "../model/Partidas.mjs"

class PartidaController{

   static buscarPartidas = async () => {
        return await partidas.find().then(partidas => partidas);
    }

    static buscarPartidasAno = async (ano) => {
        const query = partidas.find({ temporada:ano })
        return await query.exec()
    }

    static cadastrarPartidas = () => {
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

export default PartidaController;