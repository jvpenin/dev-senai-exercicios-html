function verConsorcio() {
    var outResultado = document.getElementById("outResultado");
    var idade = document.getElementById('inIdade').value;
    var salario = document.getElementById('inSalario').value;

    var respostaMain = "";

    if (idade >17 && salario >2000) {
       respostaMain = "Ótimo! Sua solicitação foi autorizada e você está autorizado(a) para efetuar a compra.";
    } else if (idade < 17 && salario>2000) {
        respostaMain =  "Que pena! Você não possui idade para proseguir. Solicitação negada!";
    } else if (idade > 17 && salario<2000){
        respostaMain = "Que pena! Seu salário não atende aos requisitos mínimos. Solicitação negada!";
    } else {
        respostaMain = "Nenhum dos requisitos foram atendidos. Solicitação negada!";
    }

    outResultado.textContent = respostaMain;
}


var btnVerificar = document.getElementById("btnVerificar");
btnVerificar.addEventListener("click", verConsorcio);


