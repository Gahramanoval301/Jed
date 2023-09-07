function multiply(...numbers) {
    const product = numbers.reduce((a, b) => a * b, 1);
    return `the product of numbers of ${numbers} is ${product}`;
}
console.log(multiply(12, 2, 5));