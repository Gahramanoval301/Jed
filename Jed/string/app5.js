function makeAbbr(str) {
    str = str.trim();
    let abbr = str[0].toUpperCase();
    for (let i = 1; i < str.length; i++) {
        if (str[i] == ' ') {
            if (str[i + 1] == ' ') {
                continue;
            }
            abbr += str[i + 1].toUpperCase();
        }
    }
    //abbr.replaceAll(' ' , '' );
    return abbr;
}

console.log(makeAbbr('dovlet Tehlukesizlik agentliyi'))
console.log(makeAbbr('dovlet Tehlukesizlik agentliyi      '))
console.log(makeAbbr('dovlet Tehlukesizlik    agentliyi      '))