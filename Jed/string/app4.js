//stringe cevir
//replaceAll

function removeZeros(number) {
    return Number(number.toString().replaceAll('0', ''));
}
console.log(removeZeros(1000223));

//noPreZeros
function noPreZeros(str) {
    let pos = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== '0') {
            pos = (str.indexOf(str[i]))
            break;
        }
    }
    console.log(str.slice(pos));
}
noPreZeros('0028390');
noPreZeros('000287390');

// const noPreZeros = (eded) => {
//     while (eded.startsWith('0'))
//     {
//         eded = eded.slice(1)
//     }
//     return eded;
// }