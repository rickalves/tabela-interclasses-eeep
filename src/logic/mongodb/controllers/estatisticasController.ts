import estatisticas from "../model/Estatisticas"


export default class EstatisticasController{

   static async buscarEstatisticas() {
        return await estatisticas.find().then(estatisticas => estatisticas);
    }

    static async buscarEstatisticasAno (ano:number){
        const query = estatisticas.find({ temporada:ano })
        return await query.exec()
    }

    static cadastrarEstatisticas() {
        let novaEstatisticas = new estatisticas({
            temporada:2023,
            gols:[
                {
                    nome: "Rick",
                    time: "2º INFOR",
                    gols: 10,
                    foto: "",
                },
                {
                    nome: "Rick",
                    time: "2º INFOR",
                    gols: 10,
                    foto: "",
                },
                
            ],
            cartoes_amarelos:[
                {
                    nome: "Rick",
                    time: "2º INFOR",
                    cartoes: 3,
                    foto: "",
                },
                {
                    nome: "Rick",
                    time: "2º INFOR",
                    cartoes: 3,
                    foto: "",
                },
            ],
            cartoes_vermelhos:[
                {
                    nome: "Rick",
                    time: "2º INFOR",
                    cartoes: 3,
                    foto: "",
                },
            
            ]
        });
        novaEstatisticas.save()
    }
}