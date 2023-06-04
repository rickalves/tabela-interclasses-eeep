
export class Datas{

    static dataDiaMes(data:string){
        const dia = data.split("/")[0]
        const mes = data.split("/")[1]
        return `${dia}/${mes}`
    }
    
    static diaSemana(data:string){
        const dia = parseInt(data.split("/")[0])
        const mes = parseInt(data.split("/")[1])-1
        const ano = parseInt(data.split("/")[2])
        const dataAtual = new Date(ano, mes, dia)
        const diaSemana = [
            'Dom',
            'Seg',
            'Ter',
            'Qua',
            'Qui',
            'Sex',
            'Sab'
        ]
        return diaSemana[dataAtual.getDay()]
    }

}
