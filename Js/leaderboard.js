

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

function buildLeaderboard(playersList = []){
    let board = document.querySelector('#leaderboardBody')
    board.innerHTML= ''
    for (let i = 0; i < playersList.length; i++){
        player = playersList[i]
        const boardRow = document.createElement('tr')
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

