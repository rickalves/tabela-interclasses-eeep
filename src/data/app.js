import db from "./config/dbConnect.js"
import PartidaController from "./controllers/partidasController.js";

//testa conexão
db.on("error", console.log.bind(console, 'Erro de conexão...'));
//abre conexão
db.once("open", () => {
    console.log("Sucesso ao conectar DB!")
});

PartidaController.cadastrarPartidas()