/*Crie um sistema que leia o nome, o peso e a altura de uma pessoa, o sistema deverá calcular o
IMC (Índice de Massa Corpórea). O IMC é calculado através da formula (imc= peso / (altura ao
quadrado). Imprimir o nome da pessoa, seu peso, sua altura e seu IMC, em linhas separadas.*/


let nome = prompt("Digite o seu nome: ");
let peso = parseFloat(prompt("Digite o seu peso: "));
let altura = parseFloat(prompt("Digite a sua altura: "));

//imc = peso/ (altura ao quadrado)
let imc = peso / (altura**2);

//imprimir o nome, seu peso, sua altura e seu imc, em linhas separadas
alert("Olá "+nome+".\n"+"Seu peso é "+peso+".\n"+"Sua altura é "+altura+".\n"+"Seu IMC é "+imc+".\n");




