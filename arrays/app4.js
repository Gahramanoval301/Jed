let arr = prompt('enter the names').split(',');
arr.forEach((element, index) => {
    console.log(`-${index}- ${element}`)
})