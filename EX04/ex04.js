function calPreco() {
    var inPrecoQuilo = document.getElementById("inPrecoQuilo").value;
    var inConsumo = document.getElementById("inConsumo").value;
    var outPreco = document.getElementById("outPreco");

    var consumo = parseFloat(inConsumo);
    var precoQuilo = parseFloat(inPrecoQuilo);
    var peso = consumo * 0.001;
    var preco = precoQuilo * peso;

    outPreco.textContent = "Valor a pagar: R$:" + preco.toFixed(2);
}

var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calPreco);