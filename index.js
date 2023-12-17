let nome = "Bruna "
let nivelXp = 0

if (nivelXp >= 0 && nivelXp <1000){
  console.log(nome + "Voce esta no nivel FERRO") 
}
else if (nivelXp > 1000 && nivelXp <= 2000){
  console.log (nome + "Voce está no nível BRONZE")
}
else if (nivelXp >2001 && nivelXp <=5000){
    console.log (nome + "Voce está no nível Prata Ouro")
}
else if (nivelXp >5001 && nivelXp <= 8000){
    console.log (nome + "Voce está no nível Platina Diamante")
}
else if (nivelXp >8001 && nivelXp <= 9000){
    console.log(nome + "Voce está no nível Ascendente")
}
else{(nivelXp > 9000) 
    console.log ("Parabéns " + nome + "você atingiu o nivel maximo e por isso foi escolhido(a) para ser o rei")}
 


