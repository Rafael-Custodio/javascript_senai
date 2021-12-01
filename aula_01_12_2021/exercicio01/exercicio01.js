
//cria uma função para mudar a cor do texto para vermelho
function mudaCorVermelho(){
    document.querySelector("#texto").style.color = "red"; //"querySelector" para selecionar um elemento
}

//cria uma função para mudar a cor do texto para azul
function mudaCorAzul(){
    document.querySelector("#texto").style.color = "blue"; //"querySelector" para selecionar um elemento
}


//cria uma função para mudar a cor do fundo para preto
function mudaFundoPreto(){
    document.querySelector("#texto").style.background = "black"; //"querySelector" para selecionar um elemento
}

//cria uma função para mudar a cor do fundo para preto
function mudaFundoAmarelo(){
    document.querySelector("#texto").style.background = "yellow"; //"querySelector" para selecionar um elemento
}

//cria uma função para mudar o tamanho do texto
function alteraTamanho(){
    document.querySelector("#texto").style.fontSize = document.querySelector("#tam").value+"px";
}


//cria uma função para o tamanho da div
function alteraDiv(){
    document.querySelector("#texto").style.width = document.querySelector("#comp").value;
    
    
    
    

}



