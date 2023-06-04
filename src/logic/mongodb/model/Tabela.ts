import { Schema } from "mongoose";
import Tabela from "@/logic/core/tabela/Tabela";
import DBConnect from "../config/DBConnect";

const timeSchema = new Schema(
    {
        time: { type: String, required: true },
        pn: { type: Number, required: true },
        v: { type: Number, required: true },
        e: { type: Number, required: true },
        d: { type: Number, required: true },
        gp: { type: Number, required: true },
        gc: { type: Number, required: true },
    }
)

const tabelaSchema = new Schema<Tabela>(
    {
        temporada:{type: Number, required: true},
        times: [timeSchema],  
    },
    {
        versionKey: false
    }
)

async function criaTabela(){
    const conn = await DBConnect.conectar()
    return conn.models?.Tabela || conn.model("Tabela", tabelaSchema)
}

export default criaTabela;