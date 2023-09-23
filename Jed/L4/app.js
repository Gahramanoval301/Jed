const startBtn = document.querySelector('#startGame')
const btn = document.querySelector('#btn')
const audio = document.querySelector('audio')
const img = document.querySelector('img')

startBtn.onclick = () => {
    const bombId = setTimeout(terroristsWin, 1000);
    btn.onclick = counterTerroristsWin

    function terroristsWin() {
        audio.src = "./terrorist-wins.mp3"
        audio.play()
        img.src = './bomb.gif'
        img.style.display = 'block'
        console.log('bomb 💣 Terrorist win!')
    }
    function counterTerroristsWin() {
        img.src = './heaven.gif'
        img.style.display = 'block'
        audio.src = "./counter-terrorists-win.mp3"
        audio.play()
        clearTimeout(bombId)
    }
}

