const makeFormalFactory = (cins) => {
    if (cins === 'K')
        return (name) => `Hi, mr ${name}`
    else if (cins === 'Q')
        return (name) => `hi, ms ${name}`
}
const forMan = makeFormalFactory('K')
const forWoman = makeFormalFactory('Q')
console.log(forMan('aga')) // Hi, mr aga
console.log(forWoman('leman')) // Hi, ms leman