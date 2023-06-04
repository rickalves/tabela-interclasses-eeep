import tabela from "../model/Tabela"


export default class TabelaController{

   static buscarTabela = async () => {
        const dados = await tabela.find().then(tabela => tabela);
        return dados
    }

    static buscarTabelaAno = async (ano:Number) => {
        const dados = await tabela.find({ temporada:ano })
        return dados
    }

    static cadastrarTabela = () => {
        let novaTabela = new tabela({
            temporada:2023,
            times:[
                {
                    time: " 1º INFOR",
                    pn: 0,
                    v: 1,
                    e: 1,
                    d: 1,
                    gp: 10,
                    gc: 4,
                },
                {
                    time: "2º INFOR",
                    pn: 0,
                    v: 1,
                    e: 1,
                    d: 1,
                    gp: 10,
                    gc: 4,
                },
            ]
            
        });
        novaTabela.save()
    }
}