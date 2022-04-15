let vidas = 0;
let pontos = 0;
let vidasDificuldade = [10, 5, 3];
let cartasViradas = 0;
let cartaUm = 0;
let cartaDois = 0;
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

    for (var i = 0; i < 9; i++) {
        posicaoCartas[posicaoSorteio[i][0]] = i;
        posicaoCartas[posicaoSorteio[i][1]] = i;
    }

    console.log(posicaoCartas);
}

function VirarCarta(carta) {
    if (cartasViradas > 1 || VerificarSeCartaEstaVirada(carta.id)) return;

    document.getElementById(carta.id).classList.add("virada" + posicaoCartas[carta.id]);

    if (cartasViradas == 0)
        cartaUm = carta.id
    else
        cartaDois = carta.id;
    cartasViradas++;

    if (cartasViradas == 2)
        VerificarCartas();
}

function VerificarCartas() {
    if (posicaoCartas[cartaUm] == posicaoCartas[cartaDois])
        SalvarCartasCorretas();
    else
        setTimeout(ResetarCartasIncorretas, 3000);
}

function VerificarSeCartaEstaVirada(carta) {
    for (var i = 0; i < 9; i++)
        if (document.getElementById(carta).classList.contains("virada" + i)) return true;
    return document.getElementById(carta).classList.contains("certa");
}

function ResetarCartasIncorretas() {
    document.getElementById(cartaUm).classList = ["carta"];
    document.getElementById(cartaDois).classList = ["carta"];
    
    cartasViradas = 0;
}

function SalvarCartasCorretas() {
    document.getElementById(cartaUm).classList.add("certa");
    document.getElementById(cartaDois).classList.add("certa");

    cartasViradas = 0;
}
