let dados

//-----//-----//-----//-----//-----//-----//-----//-----//-----//
const p1= {
    name: 'abc',
    time: '123',
    date: '123',
    points: 123,
    theme: 'quiz'
}
const players = [p1]


function orderLeaderboard(playersList = []){
    const playersMapped = [playersList.shift()]
    for (let i = 0; i < playersList.length; i++){
        const player = playersList[i]
        for (let j = 0; j < playersMapped.length; j++){
            if (j == playersMapped.length - 1){
                if (player.points > playersMapped[j].points){
                    playersMapped.splice(j, 0, player)
                    break
                }
                if (player.points < playersMapped[j].points){
                    playersMapped.splice(j+1, 0, player)
                    break
                }
                if (player.time < playersMapped[j].time) {
                    playersMapped.splice(j+1, 0, player)
                    break
                }
                playersMapped.splice(j+1, 0, player)
                break
            }
            if (player.points < playersMapped[j].points){
                continue
            }
            if (player.points == playersMapped[j].points){
                if (player.time < playersMapped[j].time) {
                    playersMapped.splice(j, 0, player)
                    break
                }
                playersMapped.splice(j+1, 0, player)
                break
            }
            playersMapped.splice(j, 0, player)
            break
        }
    }
    return playersMapped
}

function populateLeaderboard(playersList = []){
    let board = document.querySelector('#leaderboardBody')
    board.innerHTML= ''
    for (let i = 0; i < playersList.length; i++){
        const player = playersList[i]
        const boardRow = document.createElement('tr')
        boardRow.classList.add('main-board-row')
        const pName = document.createElement('td')
        pName.textContent = player.name
        const pTheme = document.createElement('td')
        pTheme.textContent = player.theme
        const pTime = document.createElement('td')
        pTime.textContent = player.time
        const pDate = document.createElement('td')
        pDate.textContent = player.date
        const pPoints = document.createElement('td')
        pPoints.textContent = player.points

        boardRow.appendChild(pName)
        boardRow.appendChild(pTheme)
        boardRow.appendChild(pTime)
        boardRow.appendChild(pDate)
        boardRow.appendChild(pPoints)
        board.appendChild(boardRow)
    }
}

function buildLeaderboard(){
    let main = document.querySelector('main')
    main.innerHTML = `<div class="all-leaderboards-container">
        <h1 class="titulo">Classificação</h1>
        <div class="main-table-container">
            <table id="main-board" class="main-table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Tema</th>
                        <th>Tempo (min:seg:milisseg)</th>
                        <th>Data</th>
                        <th>Pontuação</th>
                    </tr>
                </thead>
                <tbody id="leaderboardBody"></tbody>
            </table>
        </div>
        <div class="medias-container">
            <span class="span-medias media-acerto" id="media-acerto">Média de acertos: </span><span class="span-medias media-erro" id="media-erro">Média de erros: </span>
        </div>
        <div class="leaderboard-secundaria-container">
            <div class="leaderboard-secundaria">
                <div class="leaderboard-list">
                    <h2>One Piece</h2>
                    <ol id="one-piece">
                    </ul>
                </div>
            </div>
            <div class="leaderboard-secundaria">
                <div class="leaderboard-list">
                    <h2>Lógica</h2>
                    <ol id="logica">
                    </ul>
                </div>
            </div>
            <div class="leaderboard-secundaria">
                <div class="leaderboard-list">
                    <h2>Fatos Históricos</h2>
                    <ol id="fatos-historicos">
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `
    const novaResposta = {
        name: dados.nome,
        time: dados.tempo,
        date: dados.data,
        points: dados.acertos,
        theme: quizTitle[dados.tema]
    }
    players.push(novaResposta)
    const onePiece = []
    const logica = []
    const fatosHistoricos = []
    let pontuacaoTotal = 0
    for (let i = 0; i < players.length; i++){
        if (players[i].theme == 'One Piece') onePiece.push(players[i])
        if (players[i].theme == 'Fatos Históricos') fatosHistoricos.push(players[i])
        if (players[i].theme == 'Lógica') logica.push(players[i])
        pontuacaoTotal += players[i].points
    }
    let mediaAcerto = document.querySelector("#media-acerto")
    mediaAcerto.innerHTML += pontuacaoTotal/players.length
    let mediaErro = document.querySelector("#media-erro")
    mediaErro.innerHTML += 10 - (pontuacaoTotal/players.length)


    for (let i = 0; i < onePiece.length; i++){
        let onePieceList = document.querySelector("#one-piece")
        onePieceList.innerHTML += `<li class="quiz-list-item">${onePiece[i].name}</li>`
    }
    for (let i = 0; i < logica.length; i++){
        let logicaList = document.querySelector("#logica")
        logicaList.innerHTML += `<li class="quiz-list-item">${logica[i].name}</li>`
    }
    for (let i = 0; i < fatosHistoricos.length; i++){
        let fatosHistoricosList = document.querySelector("#fatos-historicos")
        fatosHistoricosList.innerHTML += `<li class="quiz-list-item">${fatosHistoricos[i].name}</li>`
    }
    main.innerHTML += `<div class="quiz-btns" id="quiz-btns">
    <button class="btn btn-reset" id="btn-reset">Reiniciar</button>
</div>`
    let reset = document.querySelector("#btn-reset")
    reset.addEventListener('click', buildIndex)
    reset.addEventListener('click', resetStopwatch)
    populateLeaderboard(orderLeaderboard(players))
    resetStopwatch()
}


//-----//-----//-----//-----//-----//-----//-----//-----//-----//

import { quiz1 } from "./quiz1.js";
import { quiz2 } from "./quiz2.js";
import { quiz3 } from "./quiz3.js";

const quizes ={
    'one-piece': quiz1,
    'logica': quiz2,
    'logotipo': quiz3
}
const quizTitle = {
    'one-piece': 'One Piece',
    'logica': 'Lógica',
    'fatos': 'Fatos Históricos'
}

function evaluateQuiz(){
    let inputsSelected = document.querySelectorAll('input:checked')
    if (inputsSelected.length < 10){
        alert('Selecione pelo menos uma resposta por pergunta')
        return
    }
    let divs = document.querySelectorAll('.question-container')
    const gabarito = quizes[dados.tema]
    pauseStopwatch()
    dados.tempo = document.querySelector("#timerDisplay").innerHTML
    const hoje = new Date()
    dados.data = `${hoje.getDate()}/${hoje.getMonth()+1}/${hoje.getFullYear()} ${hoje.getHours()}:${hoje.getMinutes()}`
    let inputs = document.querySelectorAll('input')
    for (let i = 0; i < inputs.length; i++){
        inputs[i].disabled = true
    }
    dados.acertos = 0
    for (let i = 0; i < inputsSelected.length; i++){
        const id = inputsSelected[i].getAttribute('data-qid')
        for (let j = 0; j < gabarito.length; j++){
            if (gabarito[j].id == id){
                if (gabarito[j].resposta == inputsSelected[i].value){
                    divs[i].classList.add('sucesso')
                    dados.acertos += 1
                } 
                else {
                    divs[i].classList.add('falha')
                }
                break
            }
        }
    }
    let quizBtns = document.querySelector("#quiz-btns")
        quizBtns.innerHTML = `<button class="btn btn-continue" id="btn-continuar">Continuar</button>`
    let continueBtn = document.querySelector("#btn-continuar")
    continueBtn.addEventListener('click', buildLeaderboard)
}

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

function coletaDadosHome() {
    const nome = document.querySelector("#nome").value
    const tema = document.querySelector("#tema").value
    if(!nome || !tema) {
        alert("Por favor, preencha ambos os campos")
        return
    }
    const dados = { nome, tema }
    return dados
}

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

let [minutes, seconds, milisseconds] = [0, 0, 0]
let stopwatchStarted = false
let stopwatch

function pauseStopwatch(){
    stopwatchStarted = false
    clearInterval(stopwatch)
}

function resetStopwatch(){
    [minutes, seconds, milisseconds] = [0, 0, 0]
    let timerContainer = document.querySelector('#timer-container')
    timerContainer.hidden = true
    stopwatchStarted = false
}

function startStopwatch(){
    let timerContainer = document.querySelector('#timer-container')
    timerContainer.removeAttribute('hidden')
    let timerDisplay = document.querySelector('#timerDisplay')
    if (!stopwatchStarted){
        stopwatch = setInterval(() => {
            if (milisseconds == 1000){
                milisseconds = 0
                if (seconds == 59){
                    seconds = 0
                    minutes += 1
                }
                else seconds += 1
            }
            else milisseconds += 10
            timerDisplay.innerHTML = `${minutes} : ${seconds} : ${milisseconds}`
        }, 10)
        stopwatchStarted = true
    }
}

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

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

function buildQuiz(){
    let enviarDadosHome = document.getElementById("btn-submit")
    enviarDadosHome.removeEventListener('click', buildQuiz)
    dados = coletaDadosHome()
    let quiz = [...quizes[dados.tema]]
    let main = document.querySelector('main')
    const title = quizTitle[dados.tema]
    main.innerHTML = `<div class="quiz-title-container"><h2 class="quiz-title">${title}</h2></div>`
    let form = document.createElement('form')
    const quizRandom = listRandomizer(quiz)
    for(let i = 0; i < quizRandom.length; i++){
        let qContainer = document.createElement('div')
        qContainer.classList.add('question-container')
        let h3 = document.createElement('h3')
        h3.classList.add('title-question')
        h3.textContent = quizRandom[i].pergunta
        let divInput = document.createElement('div')
        divInput.classList.add('input-answer-container')
        let respostas = [
            {value: 'a', text: quizRandom[i].alternativas.a},
            {value: 'b', text: quizRandom[i].alternativas.b},
            {value: 'c', text: quizRandom[i].alternativas.c},
            {value: 'd', text: quizRandom[i].alternativas.d}
        ]
        const respostasRandom = listRandomizer(respostas)
        for(let j = 0; j < respostasRandom.length; j++){
            divInput.innerHTML += `<div class="div-answer">
                <input class="input-text" required type="radio" name="${i}" id="${j}${i}" value="${respostasRandom[j].value}" data-qid="${quizRandom[i].id}"></input><label for="${j}${i}" class="label-input">${respostasRandom[j].text}</label>
            </div>`
        }
        qContainer.appendChild(h3)
        qContainer.appendChild(divInput)
        form.appendChild(qContainer)
    }
    main.appendChild(form)
    main.innerHTML += `<div class="quiz-btns" id="quiz-btns">
        <button class="btn btn-reset" id="btn-reset">Reiniciar</button>
        <button class="btn btn-send" id="btn-send">Enviar</button>
    </div>`
    let send = document.querySelector("#btn-send")
    send.addEventListener('click', evaluateQuiz)
    let reset = document.querySelector("#btn-reset")
    reset.addEventListener('click', buildIndex)
    reset.addEventListener('click', pauseStopwatch)
    reset.addEventListener('click', resetStopwatch)
}

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

let music = document.querySelector('#music')
let btnImg = document.querySelector('#play-pause-btn')

function playMusic(){
    btnImg.removeEventListener('click', playMusic)
    btnImg.addEventListener('click', pauseMusic)
    btnImg.src = "./img/pauseBtn.png"
    music.play();
}

function pauseMusic(){
    btnImg.removeEventListener('click', pauseMusic)
    btnImg.addEventListener('click', playMusic)
    btnImg.src = "./img/playBtn.png"
    music.pause();
}

pauseMusic()

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

let changeThemeBtn = document.querySelector('#botao-temas')
let themeBtn = document.querySelector('#img-temas')
let linkTheme = document.querySelector('#theme')

function changeToLightTheme(){
    changeThemeBtn.removeEventListener('click', changeToLightTheme)
    changeThemeBtn.addEventListener('click', changeToDarkTheme)
    themeBtn.src = './img/moon-flat.png'
    linkTheme.href = './Css/new-light.css'
}

function changeToDarkTheme(){
    changeThemeBtn.removeEventListener('click', changeToDarkTheme)
    changeThemeBtn.addEventListener('click', changeToLightTheme)
    themeBtn.src = './img/sun-flat.png'
    linkTheme.href = './Css/new-dark.css'
}

changeToDarkTheme()

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

function buildIndex(){
    let main = document.querySelector('main')
    main.innerHTML = `
        <div class="form-container">
            <h2>Insira seu nome e escolha o tema:</h2>
            <form action="" id="form-home" class="form-div-container">
                <div class="input-container">
                    <label for="nome" class="input-label">Nome</label>
                    <input name="nome" id="nome" class="input-box" type="text" placeholder="Insira seu nome" required>
                </div>
                <div class="input-container">
                    <label for="tema" class="input-label">Tema</label>
                    <select name="tema" id="tema" class="input-box" required>
                        <option value="" selected disabled required>Selecione o Tema</option>
                        <option value="logica" required>LOGICA</option>
                        <option value="one-piece" required>ONE PIECE</option>
                        <option value="fatos" required>FATOS HISTÓRICOS</option>
                    </select>
                </div>
                </form>
                <button id="btn-submit" class="btn">Iniciar Quiz</button>
        </div>`
    let timerContainer = document.querySelector("#timer-container")
    timerContainer.hidden = true
    let enviarDadosHome = document.getElementById("btn-submit")
    enviarDadosHome.addEventListener("click", buildQuiz)
    const startBtn = document.querySelector('#btn-submit')
    startBtn.addEventListener('click', startStopwatch)
}

buildIndex()

