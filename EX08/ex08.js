function calIMC(){

    var peso = Number(document.getElementById("inPeso").value);
    var altura = Number(document.getElementById("inAltura").value);
    var outResultado = document.getElementById("outResultado");
    resultado = "";

    var imcAltura = (altura ** 2);
    var imc = (peso / imcAltura);

    if (imc < 17){
        resultado = "Muito abaixo do peso!";
    } else if (imc >= 17 && imc <18.5) {
        resultado = "Abaixo do peso!";
    } else if(imc >=18.5 && imc <25) {
        resultado = "Parabéns! Peso normal.";
    } else if(imc >=25 && imc < 30) {
        resultado = "Acima do peso!";
    } else if (imc >=30 && imc <35) {
        resultado = "Obesidade I";
    } else if (imc >=35 && imc < 40){
        resultado = "Obesidade II. Severa!";
    } else {
        resultado = "Obesidade III. Mórbida!";
    }

    outResultado.innerText = resultado;
}

var btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", calIMC);