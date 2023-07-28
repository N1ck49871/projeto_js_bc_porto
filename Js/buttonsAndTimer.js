const startBtn = document.querySelector("#btn-submit")
let [hours, minutes, seconds, milisseconds] = [0, 0, 0, 0]
let stopwatchStarted = false
let stopwatch

function pauseStopwatch() {
    clearInterval(stopwatch)
}

function startStopwatch() {
    let timerDisplay = document.querySelector("#timerDisplay")
    if (!stopwatchStarted) {
        stopwatch = setInterval(() => {
            if (milisseconds == 1000) {
                milisseconds = 0
                if (seconds == 59) {
                    seconds = 0
                    if (minutes == 59) {
                        minutes = 0
                        hours += 1
                    } else minutes += 1
                } else seconds += 1
            } else milisseconds += 10
            timerDisplay.innerHTML = `${hours} : ${minutes} : ${seconds} : ${milisseconds}`
        }, 10)
        stopwatchStarted = true
    }
}

startBtn.addEventListener("click", startStopwatch)

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

let music = document.querySelector("#music")
let btn = document.querySelector("#play-pause-btn")

function playMusic() {
    btn.removeEventListener("click", playMusic)
    btn.addEventListener("click", pauseMusic)
    btn.classList.add("bi-pause-fill")
    btn.classList.remove("bi-play-fill")
    music.play()
}

function pauseMusic() {
    btn.removeEventListener("click", pauseMusic)
    btn.addEventListener("click", playMusic)
    btn.classList.add("bi-play-fill")
    btn.classList.remove("bi-pause-fill")

    music.pause()
}

pauseMusic()

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

changeThemeBtn = document.querySelector("#botao-temas")
themeBtn = document.querySelector("#img-temas")
linkTheme = document.querySelector("#theme")

function changeToLightTheme() {
    changeThemeBtn.removeEventListener("click", changeToLightTheme)
    changeThemeBtn.addEventListener("click", changeToDarkTheme)
    themeBtn.classList.remove("bi-sun-fill")
    themeBtn.classList.add("bi-moon-stars-fill")
    linkTheme.href = "./Css/light.css"
}

function changeToDarkTheme() {
    changeThemeBtn.removeEventListener("click", changeToDarkTheme)
    changeThemeBtn.addEventListener("click", changeToLightTheme)
    themeBtn.classList.remove("bi-moon-stars-fill")
    themeBtn.classList.add("bi-sun-fill")
    linkTheme.href = "./Css/dark.css"
}

changeToDarkTheme()
