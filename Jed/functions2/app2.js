//TODO function return olunur.
const calc = (operator) => {
    if (operator === '+')
        return (ed1, ed2) => ed1 + ed2
}
const cem = calc('+')
console.log(cem(12, 23))//35