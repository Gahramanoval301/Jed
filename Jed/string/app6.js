function writeCoordinate(x = 0, y = 0) {
    return `x: ${x},  y:${y}`;
}
console.log(writeCoordinate(6, 7))
console.log(writeCoordinate(undefined, 7))
console.log(writeCoordinate(12))
console.log(writeCoordinate())

