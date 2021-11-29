/*Uma empresa irá dar 25% de aumento para todos os funcionários, você deverá desenvolver um
programa que leia o salário atual do funcionário. Após a leitura, calcule e mostre o salário atual
em uma linha e em outra linha o salário com o aumento de 25%.*/


let nome = prompt("Digite o seu nome: ");

let sal_atual = parseFloat(prompt("Digite o salário atual: "));

let aumento = sal_atual + (sal_atual*0.25);

alert("Olá "+nome+".\n\n"+"Seu salário atual é "+sal_atual+".\n\n"+"Seu novo salário, com o aumento de 25% será "+aumento);




