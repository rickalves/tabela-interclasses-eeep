import { connect, connection } from "mongoose";

export default class DBConnect{    
    static async conectar(){
        const url = "mongodb+srv://henryworkdevti:_database123@cluster0.yvb8c6j.mongodb.net/competicao?retryWrites=true&w=majority"
        const conn = await connect(url)
        connection.once("open", () => {
            console.log("Sucesso ao conectar DB!")
        });
        return conn
    }
}

