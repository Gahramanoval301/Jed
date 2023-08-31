function makeAbbr(str) {
    let basherf = str[0].toUpperCase();
    let netice = basherf;
    let pos = 0;
    let foundsPos = '';
    while (true) {
        foundsPos = str.indexOf(' ', pos);
        if (foundPos == -1) break;
        pos = foundPos + 1;
    }

}

console.log(makeAbbr('salam dzzzdsd'))