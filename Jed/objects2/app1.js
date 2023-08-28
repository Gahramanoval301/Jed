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
function makeCar(car) {
    for (let key in car) {
        return {
            [key]: key
        }
    }

}
console.log(makeCar(car))




