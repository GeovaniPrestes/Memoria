function IniciarSistema() {
    AtribuirFuncaoAosBotoes();
}

function AtribuirFuncaoAosBotoes(){
    document.getElementById("novoJogoF").onclick = function () { IniciarNovoJogo(0) };
    document.getElementById("novoJogoM").onclick = function () { IniciarNovoJogo(1) };
    document.getElementById("novoJogoD").onclick = function () { IniciarNovoJogo(2) };
}

IniciarSistema();
