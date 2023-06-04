import mongoose from "mongoose";

const golsSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        time: { type: String, required: true },
        gols: { type: Number, required: true },
        foto: { type: String }
    }
)

const cartoesSchema = new mongoose.Schema(
    {
        nome: { type: String, required: true },
        time: { type: String, required: true },
        cartoes: { type: Number, required: true },
        foto: { type: String }
    }
)

const estatisticasSchema = new mongoose.Schema(
    {
        temporada:{type: Number, required: true},
        gols: [golsSchema],
        cartoes_amarelos: [cartoesSchema],  
        cartoes_vermelhos: [cartoesSchema],
    },
    {
        versionKey: false
    }
)

const estatisticas = mongoose.models.Estatistica || mongoose.model("Estatistica", estatisticasSchema);


export default estatisticas;