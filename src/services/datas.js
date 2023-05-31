
export function dataDiaMes(data){
    const dia = data.split("/")[0]
    const mes = data.split("/")[1]
    return `${dia}/${mes}`
}

export function diaSemana(data){
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