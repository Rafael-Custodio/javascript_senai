//Botão 02, tamanho da fonte
function mudaTamanhoFonte() {
    document.getElementById("manipula").style.fontSize = "20pt";
}

//Botão 03, cor da fonte
function mudaCorFonte() {
    document.getElementById("manipula").style.color = "blue";
}

//Botão 04, background
function mudaBackground() {
    document.getElementById("manipula").style.background = "rgb(0,0,139)";
}

//Botão 05, itálico
function mudaItalico() {
    document.querySelector("#manipula").style.fontStyle = "italic";
}

//Botão 06, background
function mudaNegrito() {
    document.getElementById("manipula").style.fontWeight = "bold";
}

//Botão 07, borda
function mudaBorda() {
    document.getElementById("manipula").style.border = "solid red 5px";
}

//Botão 08, remover borda
function removerBorda() {
    document.getElementById("manipula").style.border = "none";
}

//Botão 09, remover div
function removeDiv() {
    //document.getElementById("manipula").remove();
    //document.getElementById("manipula").style.display = "none";//oposto de block
    document.getElementById("manipula").style.visibility = "hidden"; //oposto de visible
}

//Botão 10, reaparecer Div
function reaparecerDiv() {
    //document.getElementById("manipula").remove();
    //document.getElementById("manipula").style.display = "none";
    document.getElementById("manipula").style.visibility = "visible";
}

//Botão 11, alterar texto H2 pela classe
function alteraH2() {
    document.getElementsByClassName("chamada")[2].innerHTML = "H2 alterado";
}

//Botão 12, criar background para um parágrafo
function backp() {
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "red";
}

//Botão 13, muda a cor do botão
function mudaCorB() {
    document.getElementsByTagName("input")[12].style.backgroundColor = "red";
}

//Botão 14, muda a cor de todos os botões
function mudaCorBotoes() {
    var y = document.getElementsByTagName("input");
    //alert(y.length); //para contar a quantidade
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "blue";
    }
}

//Botão 15, Contar botões e imprimir na div
function contarBotões() {
    var y = document.getElementsByTagName("input");
    document.getElementById("manipula").innerHTML = (y.length);
}

//Botão 16, Censura - Função
function censura() {
    document.querySelector("p.paragrafo").innerHTML = "***"
}

//Botão 17, Background query selector
// query selector manipula id com #
// query selector manipula class com .
// query selector manipula tag com nome da tag
function fundo() {
    document.querySelector("body").style.background = "pink";
}

//Botão 18, Trocar Foto usando query selector
function trocarFoto() {
    //document.querySelector("img").src = "../aula_03_11_2021/imagens/alien.jpg";
    //document.querySelector("#image").src = "../aula_03_11_2021/imagens/alien.jpg";
    var img = document.querySelector("#image");
    img.setAttribute('src', '../aula_03_11_2021/imagens/alien.jpg');
}