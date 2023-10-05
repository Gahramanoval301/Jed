const url = 'https://catfact.ninja/fact';
const root = document.getElementById('root')
const btn = document.getElementById('btn')


btn.addEventListener("click", () => {
    axios.get(url)
        .then(({ data: { fact } }) => {
            root.innerHTML = `
        <h1>${fact}</h1>

        `
        })
})