const leman = {
    ad: 'leman',
    yas: 18,
    showHi() {
        console.log(`name: ${this.ad}`)//! object -> dede-baba function
        //! constructorda -> arrow--function
    }
}
const leman2 = {
    ...leman
}
leman2.yas = 22;
console.log(leman);
console.log(leman2);
console.log(leman, leman2) // bele de 2'ni beraber cixartmaq olar
leman.showHi(0)


//*for'la olan usul
// const leman2 = {}

// for (let key in leman) {
//     leman2[key] = leman[key];

// }