const url = 'https://jsonplaceholder.typicode.com/posts'
axios.get(url)
    .then(({ data }) => {
        data.forEach((user) => {
            const h1 = document.createElement('h1')
            h1.textContent = user.title
            document.body.appendChild(h1)
        })
        // console.log(data)
    })








