function inverterNumeros() {
    var pNumero = document.getElementById("inPNumero").value;
    var sNumero = document.getElementById("inSNumero").value;

    var pNumero_changed = sNumero;
    var sNumero_changed = pNumero;

    window.confirm("Anteriormente: \n 1º Número: " + pNumero + "\n 2º Número: " + sNumero + "\nAgora: \n 1º Número: " + pNumero_changed + "\n 2º Número: " + sNumero_changed);
}

var btnTestar = document.getElementById("btnTestar");
btnTestar.addEventListener("click", inverterNumeros);