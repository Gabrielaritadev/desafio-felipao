let nome
let nivelXp


nome = ("Bem Vindo, digite o seu nome para iniciar")


nivelXp = ("Digite o nível de XP:");


if (nivelXp >= 0 && nivelXp <1000){
  console.log("Voce esta no nivel FERRO")
}
else if (nivelXp > 1000 && nivelXp <= 2000){
console.log ("Voce está no nível BRONZE")
}
else if (nivelXp >2001 && nivelXp <=5000){
    console.log ("Voce está no nível Prata Ouro")
}
else if (nivelXp >5001 && nivelXp <= 8000){
    console.log ("Voce está no nível Platina Diamante")
}
else if (nivelXp >8001 && nivelXp <= 9000){
    console.log("Voce está no nível Ascendente")
}else{(nivelXp > 9000)
    console.log ("Parabéns você atingiu o nivel maximo e por isso foi escolhido para ser o rei")}

