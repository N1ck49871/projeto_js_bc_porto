changeThemeBtn = document.querySelector('#botao-temas')
themeBtn = document.querySelector('#img-temas')
linkTheme = document.querySelector('#theme')

function changeToLightTheme(){
    changeThemeBtn.removeEventListener('click', changeToLightTheme)
    changeThemeBtn.addEventListener('click', changeToDarkTheme)
    themeBtn.src = 'img/dark-theme.png'
    linkTheme.href = 'Css/dark.css'
}

function changeToDarkTheme(){
    changeThemeBtn.removeEventListener('click', changeToDarkTheme)
    changeThemeBtn.addEventListener('click', changeToLightTheme)
    themeBtn.src = 'img/light-theme.png'
    linkTheme.href = 'Css/light.css'
}

changeToDarkTheme()