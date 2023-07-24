import { quiz1 } from "./quiz1.js";
const temas = [
    quiz1
]
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

exibePerguntas(temas[0]);