function multiply(...numbers) {
    const product = numbers.reduce((a, b) => {
        return a * b
    }, 1)
    return product

}
console.log(multiply(12, 2, 5));