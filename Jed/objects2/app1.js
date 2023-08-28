const car = {
    marka: '',
    model: '',
    year: '',
    sahib: ''
}
// car.marka = prompt("Enter marka:")
// car.model = prompt("Enter the model")
// car.year = prompt("Enter the year")
// car.sahib = prompt("Enter the sahib")
// console.log(car)


//2 ci yol
//true and more comfortable way
for (let key in car) {
    car[key] = prompt(`Enter the ${key}`)
}

console.log(car)

//! 1) return sadece bir action edir! Ona gore alinmir!
//     for (let key in car) {
//         return {
//             key: prompt(`Enter the ${key}`)
//         }
// }




