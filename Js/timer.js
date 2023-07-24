const startBtn = document.querySelector('#start')
let [hours, minutes, seconds, milisseconds] = [0, 0, 0, 0]
let timerDisplay = document.querySelector('#timerDisplay')
let stopwatchStarted = false
let stopwatch

startBtn.addEventListener('click', () => {
    if (!stopwatchStarted){
        stopwatch = setInterval(() => {
            if (milisseconds == 1000){
                milisseconds = 0
                if (seconds == 59){
                    seconds = 0
                    if (minutes == 59){
                        minutes = 0
                        hours += 1
                    }
                    else minutes += 1
                }
                else seconds += 1
            }
            else milisseconds += 10
            timerDisplay.innerHTML = `${hours} : ${minutes} : ${seconds} : ${milisseconds}`
        }, 10)
        stopwatchStarted = true
    }
})