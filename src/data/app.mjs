import db from "./config/dbConnect.mjs"
import EstatisticasController from "./controllers/estatisticasController.mjs";


//testa conexão
db.on("error", console.log.bind(console, 'Erro de conexão...'));
//abre conexão
db.once("open", () => {
    console.log("Sucesso ao conectar DB!")
});

EstatisticasController.cadastrarEstatisticas()

