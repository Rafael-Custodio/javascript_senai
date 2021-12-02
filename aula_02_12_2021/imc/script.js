function calcularIMC(){

    //entrada de dados
    let nome = document.querySelector("#idNome").value;
    let peso = parseFloat(document.querySelector("#idPeso").value);
    let altura = parseFloat(document.querySelector("#idAltura").value);

    //processamento
    let resultado = (peso/(altura**2));

    //saída
    document.querySelector("#saida").innerHTML = "Nome: " + nome + ", IMC: " + resultado;


}