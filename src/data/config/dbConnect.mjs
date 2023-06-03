import mongoose from "mongoose";

const url = "mongodb+srv://henryworkdevti:_database123@cluster0.yvb8c6j.mongodb.net/competicao?retryWrites=true&w=majority"
mongoose.connect(url)
let db = mongoose.connection;

export default db;