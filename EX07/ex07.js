function verParImpar() {
    var inNumber = document.getElementById("inNumber");
    var outResultado = document.getElementById("outResultado");

    var number = inNumber.value;
    var resto = number % 2;

    if (resto == 0) {
        outResultado.textContent = "O número informado é Par!"
    } else [
        outResultado.textContent = "O número informado é Ímpar!"
    ]
}

var btnVerificar = document.getElementById("btnVerificar")
btnVerificar.addEventListener("click", verParImpar)