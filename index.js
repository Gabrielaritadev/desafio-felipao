let nome = "Gustavo "
let quantidadeXp = 1.000

if (quantidadeXp <=1.000){
  console.log("O herói " + nome + "está no nivel de FERRO") 
}
else if (quantidadeXp > 1.000 && quantidadeXp <= 2.000){
  console.log ("O herói " + nome + "está no nivel de BRONZE")
}
else if (quantidadeXp >2.001 && quantidadeXp <=5.000){
    console.log ("O herói " + nome + "está no nivel de PRATA")
}
else if (quantidadeXp >5.001 && quantidadeXp <= 8.000){
    console.log ("O herói " + nome + "está no nivel de OURO")
}
else if (quantidadeXp >8.001 && quantidadeXp <= 9.000){
    console.log("O herói " + nome + "está no nivel de PLATINA")
}
else if (quantidadeXp >9.001 && quantidadeXp <= 10.000){
  console.log("O herói " + nome + "está no nivel de IMORTAL")
}
else if (quantidadeXp >= 10.001){
    console.log("O herói " + nome + "está no nivel de RADIANTE")
}

