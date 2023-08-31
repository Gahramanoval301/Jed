function pluralToSingular(str) {
    if (str.endsWith('s')) {
        return str.slice(0, str.length - 1);
    }
}
console.log(pluralToSingular('tasks'))
console.log(pluralToSingular('games'))
console.log(pluralToSingular('gamel'))