function calcularIMC() {
    //Entrada - nome, peso, altura
    let nome = document.getElementById("idNome").value;
    let peso = parseFloat(document.getElementById("idPeso").value);
    let altura = parseFloat(document.getElementById("idAltura").value);
    //processamento -IMC=(peso/(altura**2))
    let resultado = peso / (altura ** 2);
    //saída - nome + IMC
    document.getElementById("saida").innerHTML = "nome: " + nome + ", IMC: " + resultado;
}