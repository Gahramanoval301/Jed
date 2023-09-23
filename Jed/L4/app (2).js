const darkModeContainer = document.getElementById("darkModeContainer")
const modeBtn = document.getElementById("modeBtn")
// localStorage.setItem('modes', 'white-black-green-purple')
// localStorage.setItem('mode', 0)

setMode()
modeBtn.onclick = () => {
    setMode(true)
}


function setMode(clicked) {
    const index = localStorage.getItem('mode')
    const modes = localStorage.getItem('modes').split('-')

    switch (modes[index]) {
        case "dark":
            darkModeContainer.className = 'darkMode'
            modeBtn.textContent = '🌞'
            localStorage.setItem('mode', 1)
            break;
        case 'green':
            darkModeContainer.className = 'greenMode'
            modeBtn.textContent = '⛳'
            localStorage.setItem('mode', 2)
            break;
        case 'purple':
            darkModeContainer.className = 'purpleMode'
            modeBtn.textContent = '💜'
            localStorage.setItem('mode', 3)
            break;
        case 'light':
        default:
            darkModeContainer.className = 'lightMode'
            modeBtn.textContent = '🌛'
            localStorage.setItem('mode', 0)
    }
    if (clicked) {
        localStorage.setItem('mode', +index + 1)
        setMode()
    }
}
