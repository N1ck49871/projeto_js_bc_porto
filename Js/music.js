let music = document.querySelector('#music')
let btn = document.querySelector('#play-pause-btn')
function playMusic(){
    btn.removeEventListener('click', playMusic)
    btn.addEventListener('click', pauseMusic)
    btn.src = './img/pause-btn.png'
    music.play();
}

function pauseMusic(){
    btn.removeEventListener('click', pauseMusic)
    btn.addEventListener('click', playMusic)
    btn.src = './img/play-btn.png'
    
    music.pause();
}

pauseMusic()
