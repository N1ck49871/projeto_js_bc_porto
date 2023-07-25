import { quiz1 } from "./quiz1.js";
// import { respostaCertaQ1 } from "./quiz1.js";

const temas = [
    quiz1
];
function exibePerguntas(quests) {
    const questao = document.querySelector("#perguntas"); // Usando querySelector em vez de querySelectorAll
    questao.innerHTML = "";
    for (let quiz of quests) {
        questao.innerHTML += `
            <h3 id="pergunta">${quiz.pergunta}</h3>

            <input type="radio" name="resposta" value="1" required />
            <label for="resposta">A) ${quiz.r1}</label>

            <input type="radio" name="resposta" value="2" required />
            <label for="resposta">B) ${quiz.r2}</label>

            <input type="radio" name="resposta" value="3" required />
            <label for="resposta">C) ${quiz.r3}</label>

            <input type="radio" name="resposta" value="4" required />
            <label for="resposta">D) ${quiz.r4}</label>
        `;
    };
};

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