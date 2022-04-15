let vidas = 0;
let pontos = 0;
let vidasDificuldade = [10, 5, 3];
let cartasViradas = 0;
let posicaoCartas = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];

function IniciarNovoJogo(dificuldade) {
    cartasViradas = 0;
    vidas = vidasDificuldade[parseInt(dificuldade)];
    SortearPosicaoCartas();
    AtualizarTextos();
}

function AtualizarTextos() {
    document.getElementById("vidas").innerHTML = "Vidas restantes: " + vidas;
    document.getElementById("pontos").innerHTML = "Pontuação: " + pontos;
}

function SortearPosicaoCartas() {
    var posicaoSorteio = [[-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1]];
    for (var i = 0; i < 18; i++) {
        var foto = Math.round(Math.random() * 8);
        if (posicaoSorteio[foto][0] == -1)
            posicaoSorteio[foto][0] = i;
        else if (posicaoSorteio[foto][1] == -1)
            posicaoSorteio[foto][1] = i;
        else
            i--;
    }

    for(var i = 0; i< 9; i++){
        posicaoCartas[posicaoSorteio[i][0]] = i;
        posicaoCartas[posicaoSorteio[i][1]] = i;
    }

    console.log(posicaoCartas);
}
