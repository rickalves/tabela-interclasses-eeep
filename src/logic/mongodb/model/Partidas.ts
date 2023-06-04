import mongoose from "mongoose";


const partidaSchema = new mongoose.Schema(
    {
        timeA:{type: String},
        timeB: {type: String},
        placarA: {type: Number},
        placarB: {type: Number},
        data:{type: String},
        hora:{type: String},
        finalizado: {type: Boolean},
        vencedor:{type: String},
    }
)

const partidasSchema = new mongoose.Schema(
    {
        temporada:{type: Number, required: true},
        rodadas: [[partidaSchema]]    
    },
    {
        versionKey: false
    }
)

const partidas = mongoose.models.Partidas || mongoose.model("Partidas", partidasSchema);


export default partidas;