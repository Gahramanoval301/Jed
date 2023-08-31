function engToAzV12(str) { //ms - > cenab
    let space = str.indexOf(' ');
    let xitab = str.slice(0, space);
    let azForm = 0;
    if (xitab.toLowerCase() == 'mr.') {
        azForm = str.replace(xitab, 'cenab')
    }
    if (xitab.toLowerCase() == 'ms.') { azForm = str.replace(xitab, 'xanim'); }
    return `${azForm}`
}

console.log(engToAzV12('MS. leman'))
console.log(engToAzV12('Ms. leman'))
console.log(engToAzV12('Mr. aga'))
console.log(engToAzV12('mr. aga'))