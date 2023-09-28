const url = "https://jsonplaceholder.typicode.com/posts";
const xhrObj = new XMLHttpRequest();

xhrObj.open("GET", url);
xhrObj.send();

xhrObj.onreadystatechange = () => {
    if (xhrObj.readyState === 4) {
        console.log(xhrObj.readyState);
        const posts = JSON.parse(xhrObj.responseText);
        const newPost = posts.map((user) => {
            const h2 = document.createElement('h2');
            const p = document.createElement('p');
            const div = document.createElement('div');
            h2.textContent = user.title
            p.textContent = user.body
            div.append(h2, p)
            document.body.appendChild(div);
            return {
                "title": user.title,
                "body": user.body
            }
        })
        console.log(newPost);
    }
}