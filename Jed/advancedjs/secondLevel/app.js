Number.prototype.isEven = function () {
    return (this % 2 === 0) ? true : false
}
let ed1 = 12;
let ed2 = 13;
console.log(ed1.isEven(), ed2.isEven())


Array.prototype.removeMiddleElement = function () {
    this.splice(this.length / 2, 1);
    return this;
}

let array1 = [1, 2, 3, 4, 56];
let array2 = [1, 2, 6, 4];
console.log(array1.removeMiddleElement(), array2.removeMiddleElement())


String.prototype.removeLetter = function (letter) {
    return this.replaceAll(letter.toLowerCase(), '').replaceAll(letter.toUpperCase(), '');
}
let word1 = 'lemanL';
console.log(word1.removeLetter('l'))
