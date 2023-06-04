import estatisticas from "../model/Estatisticas.mjs"


class EstatisticasController{

   static buscarEstatisticas = async () => {
        return await estatisticas.find().then(estatisticas => estatisticas);
    }

    static buscarEstatisticasAno = async (ano) => {
        const query = estatisticas.find({ temporada:ano })
        return await query.exec()
    }

    static cadastrarEstatisticas = () => {
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

export default EstatisticasController;