function verificar() {
    var inNumero = document.getElementById("inNumero").value;
    var outMes = document.getElementById("outMes");
    var res;

    switch(inNumero) { // As estruturas de caso são parecidas com: case === inNumero; Precisam ser IDENTICOS.
        case "1":
            res = "Janeiro";
            break;
        case "2":
            res = "Fevereiro";
            break;
        case "3": 
            res = "Março";
            break
        case "4":
            res = "Abril";
            break;
        case "5":
            res = "Maio";
            break;
        case "6":
            res = "Junho";
            break;
        case "7":
            res = "Julho";
            break;
        case "8":
            res = "Agosto";
            break;
        case "9":
            res = "Setembro";
            break;
        case "10":
            res = "Outubro";
            break;
        case "11":
            res="Novembro";
            break;
        case "12":
            res = "Dezembro";
            break;
        default:
            res = "O número informado é invalido. Tente novamente!"
            break;
    }
    outMes.innerText = res;
}

var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", verificar);