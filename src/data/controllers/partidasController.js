import partidas from "../model/Partidas.js"
import partidasMock from "../mocks/partidas.js";

class PartidaController{

    static buscarPartidas = () => {
        partidas.find((err, Autors) => {
            res.status(200).json(Autors);
        });
    }

    static buscarAutorPorId = (req, res) => {
        const {id} = req.params
        partidas.findById(id, (err, autor) => {
            if(!err){
                res.status(200).json(autor);
            }else{
                res.status(400).send({message: `${err.message} - Erro ao buscar.`})
            }
        });
    }

    static cadastrarPartidas = () => {
        let novaPartidas = new partidas({
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
        
        novaPartidas.save()
    }
}

export default PartidaController;