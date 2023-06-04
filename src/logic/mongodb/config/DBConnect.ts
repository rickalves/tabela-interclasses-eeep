import mongoose from "mongoose";

export default class DBConnect{
    static url = "mongodb+srv://henryworkdevti:_database123@cluster0.yvb8c6j.mongodb.net/competicao?retryWrites=true&w=majority"
    
    static conectar(){
        mongoose.connect(this.url)
        mongoose.connection.on("error", () => {
            console.log('Erro de conexão...')
        });
        
            mongoose.connection.once("open", () => {
            console.log("Sucesso ao conectar DB!")
        });
    }
}

