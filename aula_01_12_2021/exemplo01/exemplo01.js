//alert ("Eu não quero mais errar caminho!!!");


/*
function calcular(){
    document.querySelector("#resultado").value = parseFloat(document.querySelector("#num1").value) + parseFloat(document.querySelector("#num2").value);
}
*/


/*
function calcular(){
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    let resultado = num1+num2;
    document.querySelector("#resultado").value = resultado;
}
*/

function ColetarDados(){
    let num1 = parseFloat(document.querySelector("#num1").value);
    let num2 = parseFloat(document.querySelector("#num2").value);
    somar(num1, num2);
}

function somar(primeiroNumero, segundoNumero){
    let res = primeiroNumero + segundoNumero;
    ImprimirDados(res);
}

function ImprimirDados(resultado){
    document.querySelector("#resultado").value = resultado;
}


