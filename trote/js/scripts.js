function calcular(){
    let soma = 0
    let acaoSocial = document.getElementById("acaoSocial").value
    soma = soma + Number(acaoSocial)
    let homenagem = document.getElementById("homenagem").value
    soma = soma + Number(homenagem)
    let leite = document.getElementById("leite").value
    soma = soma + Number(2 * Number(leite))
    let kitAvulso = document.getElementById("kitAvulso").value
    soma = soma + Number(30 * Number(kitAvulso))
    let suplementoAvulso = document.getElementById("suplementoAvulso").value
    soma = soma + Number(15 * Number(suplementoAvulso))
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}