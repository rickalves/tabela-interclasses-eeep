import tabela from "../model/Tabela.mjs"


class TabelaController{

   static buscarTabela = async () => {
        return await tabela.find().then(tabela => tabela);
    }

    static buscarTabelaAno = async (ano) => {
        const query = tabela.find({ temporada:ano })
        return await query.exec()
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

export default TabelaController;