function calResultado(){
    var inName = document.getElementById("inName");
    var inFirstNote = document.getElementById("inFirstNote");
    var inSecondNote = document.getElementById("inSecondNote");
    var outName = document.getElementById("outName")
    var outResultado = document.getElementById("outResultado")

    nome = inName.value;
    firstNote= Number(inFirstNote.value);
    secondNote = Number(inSecondNote.value);

    media = (firstNote + secondNote) / 2;

    outName.textContent = "Olá " + nome + ",";

    if (media >= 7) {
        outResultado.textContent = "Parabéns! Você foi aprovado(a)."
    } else {
        outResultado.textContent = "Você foi reprovado(a). Tente novamente!"
    }
}
var btnConsultar = document.getElementById("btnConsultar");
btnConsultar.addEventListener("click", calResultado);