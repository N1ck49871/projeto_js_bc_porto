import { quiz1 } from "./quiz1.js"
import { quiz2 } from "./quiz2.js"
import { quiz3 } from "./quiz3.js"
const temas = [quiz1, quiz2, quiz3]

function randomInt(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber
}

function listRandomizer(list) {
    const listRandomized = []
    while (list.length > 0) {
        const max = list.length - 1
        const randomIndex = randomInt(0, max)
        listRandomized.push(list[randomIndex])
        list.splice(randomIndex, 1)
    }
    return listRandomized
}

let perguntasRandom = listRandomizer(temas[1])

const sectionPerguntas = document.getElementById("quiz")
const sectionResultados = document.getElementById("results")
const btnConcluir = document.getElementById("submit")
const btnRestart = document.getElementById("restart-btn")

let vetorResultado = []

mostrarQuiz(perguntasRandom, sectionPerguntas, sectionResultados, btnConcluir)

function mostrarQuiz(
    perguntas,
    sectionPerguntas,
    sectionResultados,
    btnConcluir
) {
    let inputs = sectionPerguntas.querySelectorAll('input[type="radio"]')
    for (let input of inputs) {
        input.disabled = false
    }

    function mostrarPerguntas(perguntas, sectionPerguntas) {
        let output = []
        let alternativas

        for (let i = 0; i < perguntas.length; i++) {
            alternativas = []

            for (let p in perguntas[i].alternativas) {
                alternativas.push(
                    `
          <label>
          <input type="radio" id="ipts" name="pergunta${i}" value="${p}">
          ${p}) ${perguntas[i].alternativas[p]}
          </label>
          `
                )
            }
            output.push(
                `
          <div class="pergunta">${perguntas[i].pergunta}</div>
          <div class="alternativas">${alternativas.join("")}</div>
          `
            )
        }
        sectionPerguntas.innerHTML = output.join("")
    }

    let respostasUsuario = ""
    let vetorRespostas = []
    function showResults(perguntas, sectionPerguntas, sectionResultados) {
        let sectionRespostas =
            sectionPerguntas.querySelectorAll(".alternativas")

        respostasUsuario
        let numCertas = 0

        for (let i = 0; i < perguntas.length; i++) {
            respostasUsuario = (
                sectionRespostas[i].querySelector(
                    `input[name=pergunta${i}]:checked`
                ) || {}
            ).value
            vetorRespostas.push(respostasUsuario)
            if (respostasUsuario === perguntas[i].resposta) {
                numCertas++
                sectionRespostas[i].style.color = "lightgreen"
                // sectionRespostas[i].classList.add('resposta-certa');
                // sectionRespostas[i].classList.remove('resposta-errada');
            } else {
                sectionRespostas[i].style.color = "red"
                // sectionRespostas[i].classList.add('resposta-errada');
                // sectionRespostas[i].classList.remove('resposta-certa');
            }
        }
        sectionResultados.innerHTML = `${numCertas} de ${perguntas.length}`

        inputs = sectionPerguntas.querySelectorAll('input[type="radio"]')
        for (let input of inputs) {
            input.disabled = true
        }
    }

    mostrarPerguntas(perguntas, sectionPerguntas)

    btnConcluir.onclick = function () {
        showResults(perguntas, sectionPerguntas, sectionResultados)
        console.log(vetorRespostas)
        vetorRespostas.splice(0)
    }
}

btnRestart.onclick = function () {
    mostrarQuiz(
        perguntasRandom,
        sectionPerguntas,
        sectionResultados,
        btnConcluir
    )
    console.log("Reiniciando Quiz")
}
