// Arraylere yeni metod əlavə edin.Constructor prototype ilə.

//     isEmpty
// Array boşdursa true, doludursa false qaytarır

Array.prototype.isEmpty = function () {
    return !(this.length)
}
let arr = [1, 2, 'A', true];
console.log(arr.isEmpty());
console.log([].isEmpty())

// Arraya onlyNumbers metodu əlavə edin.Geriyə ədədlərdən ibarət massiv qaytarsın.
Array.prototype.onlyNumbers = function () {
    let newArr = [];
    let array = this;
    array.forEach((number) => {
        if (typeof number === 'number' && !isNaN(number))
            newArr.push(number)
        // if (!isNaN(number)) newArr.push(number)
    })
    return newArr;
}
let arr1 = [2, 3, 'A', true, false, 'leman', NaN];
console.log(arr1.onlyNumbers());

// Array sortNumbers metodu əlavə edin.Onu çağıranda ədədləri böyükdən kiçiyə doğru düzsün.

Array.prototype.sortNumbers = function () {
    let array = this;
    return array.sort((a, b) => b - a) //! [..this.sort](a, b) => b-a]//more good
}
let array1 = [3, 2, 4, 20, 12];
console.log(array1.sortNumbers());


Array.prototype.sortStudentMark = function () {
    let array = this;
    return array.sort((a, b) => b.mark - a.mark)

}
const students = [{ ad: 'Ali', mark: 99.9 }, { ad: 'Nail', mark: 40 }, { ad: 'Lale', mark: 100 }]
console.log(students.sortStudentMark());