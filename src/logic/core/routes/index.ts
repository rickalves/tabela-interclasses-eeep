import express from "express"
import tabelas from "./tabelaRoutes"; 
import cors from "cors"



const routes = (app:any) => {
    app.route('/').get((req:any, res:any) => {
        res.status(200).send({titulo: 'Bem vindo ao App!'});
    });

    app.use(
        express.json(),
        cors(),
        tabelas,
    );
}

export default routes;