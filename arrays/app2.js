
function subArrayZero(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return (sum === 0) ? true : false
}

console.log(subArrayZero([2, 3, -4]))  //false
console.log(subArrayZero([2, -2, -4, 4])) //true