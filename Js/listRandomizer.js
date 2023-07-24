function randomInt(min, max){
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min)
    return randomNumber
}

function listRandomizer (list){
    const listRandomized = []
    while (list.length > 0){
        const max = list.length - 1
        const randomIndex = randomInt(0, max)
        listRandomized.push(list[randomIndex])
        list.splice(randomIndex, 1)
    }
    return listRandomized
}