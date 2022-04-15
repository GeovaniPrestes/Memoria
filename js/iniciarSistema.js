function IniciarSistema() {
    AtribuirFuncaoAosBotoes();
    CriarCartas();
}

function AtribuirFuncaoAosBotoes() {
    document.getElementById("novoJogoF").onclick = function () { IniciarNovoJogo(0) };
    document.getElementById("novoJogoM").onclick = function () { IniciarNovoJogo(1) };
    document.getElementById("novoJogoD").onclick = function () { IniciarNovoJogo(2) };
}

function CriarCartas() {
    var jogo = document.getElementById("jogo");

    for (var i = 0; i < 18; i++) {
        var carta = document.createElement("div");


        carta.setAttribute("id", i);
        carta.setAttribute("class", "carta")
        carta.setAttribute("onclick", "VirarCarta(this)");
        carta.innerHTML = i;
        jogo.appendChild(carta);
    }
}

IniciarSistema();
