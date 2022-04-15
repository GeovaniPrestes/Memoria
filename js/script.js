let vidas = 0;
let pontos = 0;
let vidasDificuldade = [10, 5, 3];
let cartasViradas = 0;

function IniciarNovoJogo(dificuldade) {
    cartasViradas = 0;
    vidas = vidasDificuldade[parseInt(dificuldade)];
    AtualizarTextos();
}

function AtualizarTextos() {
    document.getElementById("vidas").innerHTML = "Vidas restantes: " + vidas;
    document.getElementById("pontos").innerHTML = "Pontuação: " + pontos;
}
