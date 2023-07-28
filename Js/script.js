// imports de cada Quiz, separado por pergunta

function coletaDadosHome() {
    const nome = document.querySelector("#nome").value
    const tema = document.querySelector("#tema").value
    const dados = { nome, tema }
    return dados
}

const enviarDadosHome = document.querySelector("#btn-submit")

let dados
enviarDadosHome.addEventListener("click", () => {
    dados = coletaDadosHome()
});
