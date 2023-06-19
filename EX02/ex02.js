function duracaoFilme() {
//referência aos elementos da página
var inTitulo = document.getElementById("inTitulo");
var inDuracao = document.getElementById("inDuracao");
var outTitulo = document.getElementById("outTitulo");
var outDuracao = document.getElementById("outConvercao");

//obtém conteúdos dos campos de entrada
var titulo = inTitulo.value;
var duracao = Number(inDuracao.value); //arredonda para baixo o resultado da divisão
var horas = Math.floor(duracao/60); // revisar
var minutos = duracao%60;

//altera o conteúdo dos parágrafos de resposta

outTitulo.textContent = titulo;
outDuracao.textContent = "Horas: " + horas + "Minutos: " + minutos;
}

//definição do botão Converter
var btnConverter = document.getElementById("btnConverter");

btnConverter.addEventListener("click", duracaoFilme);
