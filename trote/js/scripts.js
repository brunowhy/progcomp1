function calcular(){
    // declaração variável sem tipo
   let soma = 0, acaoSocial, homenagem, leite, kit, equipe, suplemento, pontosKitSupl = 0,
   sangue, pontoSangue = 0
   // recupera o valor da ação social digitado
    acaoSocial = document.getElementById("acaoSocial").value
   soma = soma + Number(acaoSocial)
   // recupera o valor da homenagem digitado
    homenagem = document.getElementById("homenagem").value
   soma = soma + Number(homenagem)
   // recupera a qtde de litros de leite
    leite = document.getElementById("leite").value
   soma = soma + (2 * Number(leite))
   // recupera a qtde de kits 
    kit = Number(document.getElementById("kit").value)
   // recupera a cor da equipe
    equipe = document.getElementById("equipe").value
    // recupera a qtde de latas de suplemento
    suplemento = document.getElementById("suplemento").value
     pontosKitSupl = 0 // guarda pontuação de kit + supl
   if (equipe == "Laranja"){
       // equipe é laranja
       if (kit >= 97 && suplemento >= 49) {
           pontosKitSupl = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
       }
       else if (kit >= 78){
           pontosKitSupl = 4000 + ((kit - 78) * 30)
       }
       else if (kit >= 49) {
           pontosKitSupl = 2500 + ((kit - 49) * 30)
       }
       else if (kit >= 19){
           pontosKitSupl = 1000 + ((kit - 19) * 30)
       }
       else {
           pontosKitSupl = (kit * 30)
       }
   }
   else if (equipe == "Preta") {

   }
   else if (equipe == "Roxa") {

   }
   else if (equipe == "Verde") {

   }
   else (equipe == "Vermelha")
   
   alert(pontosKitSupl)
   soma = soma + pontosKitSupl

  sangue = number(document.getElementById("sangue").value)
  if (equipe == "Laranja"){
    if (sangue >= 49)[
        pontoSangue = 2500 + (sangue - 49) * 20
    ]
    else [
        pontoSangue = sangue * 20
    ]
  }
  else if (equipe == "Preta"){
    if (sangue >= 52)[
        pontoSangue = 2500 + (sangue - 52) * 20
    ]
    else[
        pontoSangue = sangue * 20
    ]
  }
   // devolve .geto resultado para o HTML
   document.getElementById("soma").innerHTML = soma.toFixed(2)
}
