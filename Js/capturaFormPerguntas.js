import { quiz1 } from "./quiz1.js";
// import { respostaCertaQ1 } from "./quiz1.js";

const temas = [
    quiz1
];

function exibePerguntas(quests) {
    const questaoContainer = document.querySelector("#perguntas");
    questaoContainer.innerHTML = ""; // Limpar o conteúdo antigo

    for (let i = 0; i < quests.length; i++) {
        const quiz = quests[i];

        // Criar um novo elemento para a pergunta
        const perguntaElemento = document.createElement("h3");
        perguntaElemento.id = "pergunta";
        perguntaElemento.textContent = quiz.pergunta;

        // Criar elementos para as opções
        const opcoesContainer = document.createElement("div");

        for (let j = 1; j <= 4; j++) {
            const opcaoInput = document.createElement("input");
            opcaoInput.type = "radio";
            opcaoInput.name = `resposta${i}`;
            opcaoInput.value = j;
            opcaoInput.required = true;

            const opcaoLabel = document.createElement("label");
            opcaoLabel.textContent = `${"ABCD"[j-1]}) ${quiz["r" + j]}`;

            opcoesContainer.appendChild(opcaoInput);
            opcoesContainer.appendChild(opcaoLabel);
        }

        // Adicionar pergunta e opções ao container
        questaoContainer.appendChild(perguntaElemento);
        questaoContainer.appendChild(opcoesContainer);
    }
}

function randomInt(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber
};

function listRandomizer (list){
    const listRandomized = []
    while (list.length > 0){
        const max = list.length - 1
        const randomIndex = randomInt(0, max)
        listRandomized.push(list[randomIndex])
        list.splice(randomIndex, 1)
    }
    return listRandomized
};

function capturaResposta(){
    const opcoes = document.getElementsByName("resposta");

    for (let i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
            respostaOpcoes = opcoes[i].value
            return respostaOpcoes;
        }
    }
};

let perguntasRandom = listRandomizer(temas[0])
exibePerguntas(perguntasRandom);
console.log(capturaResposta());
// console.log(perguntasRandom);