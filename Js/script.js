function coletaDadosHome() {
    const nome = document.querySelector("#nome").value;
    const tema = document.querySelector("#tema").value;
    const dados = {nome, tema};
    return dados;
}

const enviarDadosHome = document.querySelector("#btn-submit");

enviarDadosHome.addEventListener("click", ()=>{
    const dados = (coletaDadosHome());
});