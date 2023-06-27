var inNome = window.prompt("Insira seu nome: ");
var outNome = document.getElementById("outNome");

outNome.textContent = "Olá, " + inNome + ". Atenção! Responda as perguntas com sinceridade."

function analisarRespostas() {
var formulario = document.getElementById("formulario");
var inputRadio = formulario.querySelectorAll('input[type="radio"]:checked');
var outRes = document.getElementById("outRes");

var cont = 0;

    inputRadio.forEach(radio => {
        if (radio.value === "true"){
            cont++;
        }
    });


    /*
    DEU ERRADO:
    for (i = 0; i<=inputRadio.length();i++) {
        if (inputRadio[i].value==="true") {
            cont++;
        }
    }*/

    if (cont==2){
        outRes.textContent = "Classificação: 2 - SUSPEITO!"
    } else if (cont==3 || cont==4) {
        outRes.textContent = "Classificação: 3/4 - CÚMPLICE!"
    } else if (cont==5){
        outRes.textContent = "Classificação: 5 - ASSASSINO!" 
    } else {
        outRes.textContent = "Classificação: 0 - INOCENTE!"
    }
}