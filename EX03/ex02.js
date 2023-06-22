function calPromocao() {
    var inVeiculo = document.getElementById("inVeiculo");
    var inPreco = document.getElementById("inPreco");
    var outVeiculo = document.getElementById("outVeiculo");
    var outEntrada = document.getElementById("outEntrada");
    var outParcela = document.getElementById("outParcela");

    var promocao = inVeiculo.value;
    var preco = Number(inPreco.value);
    var entrada = preco * 0.5;
    var parcela = (preco - entrada) / 12;

    outVeiculo.textContent = "Promoção: " + promocao;
    outEntrada.textContent = "Entrada de R$: " + entrada.toFixed(2);
    outParcela.textContent = "+12x de R$: " + parcela.toFixed(2);
}
    var btnPromocao = document.getElementById("btnPromocao");
    btnPromocao.addEventListener("click", calPromocao);