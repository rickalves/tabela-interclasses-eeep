import express from "express"
import TabelaService from "../tabela/TabelaService";

const router = express.Router();

router
    .get("/tabelas", TabelaService.carregaTabela)
    // .get("/autores/:id", autoresController.buscarAutorPorId)

export default router;