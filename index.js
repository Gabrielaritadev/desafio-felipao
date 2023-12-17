let nome = "Gustavo "
let nivelXp = 2.000

if (nivelXp <=1.000){
  console.log("O herói " + nome + "está no nivel de FERRO") 
}
else if (nivelXp > 1.000 && nivelXp <= 2.000){
  console.log ("O herói " + nome + "está no nivel de BRONZE")
}
else if (nivelXp >2.001 && nivelXp <=5.000){
    console.log ("O herói " + nome + "está no nivel de Prata")
}
else if (nivelXp >5.001 && nivelXp <= 8.000){
    console.log ("O herói " + nome + "está no nivel de Ouro")
}
else if (nivelXp >8.001 && nivelXp <= 9.000){
    console.log("O herói " + nome + "está no nivel de Platina")
}
else if (nivelXp >9.001 && nivelXp <= 10.000){
  console.log("O herói " + nome + "está no nivel de Imortal")
}
else if (nivelXp >= 10.001){
    console.log("O herói " + nome + "está no nivel de Radiante")
}


