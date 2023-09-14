// const btn = document.querySelector('button');
//elementi clickleyende ozunu gizletsin
// btn.onclick = () => {
//     btn.remove()
// }
// function hideBtn() {
//     btn.style.display = 'none';
// }
// btn.addEventListener('click', hideBtn)
const carImage = document.querySelector('img');
let word = ''
window.addEventListener('keypress', (e) => {
    word += e.key;
    if (word === 'masin')
        carImage.src = "./bangkok-thailand-08082022-lamborghini-luxury-super-car-fast-sports-premium-lighting-background-3d-illustration_67092-1599.avif"

}
)

