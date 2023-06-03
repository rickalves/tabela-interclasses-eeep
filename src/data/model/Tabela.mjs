import mongoose from "mongoose";

const timeSchema = new mongoose.Schema(
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

const tabelaSchema = new mongoose.Schema(
    {
        temporada:{type: Number, required: true},
        times: [timeSchema],  
    },
    {
        versionKey: false
    }
)

const tabela = mongoose.model("tabela", tabelaSchema);


export default tabela;