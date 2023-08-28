const product = {
    model: 'xiomi',
    price: 1200,
    "background-color": 'red'
}
console.log(product.price)
product.price -= 200;
console.log("Discount on price of product")
console.log(product.price)
console.log(product["background-color"])
let a = 'background-color'
console.log(product[a])
for (let key in product) {
    console.log(product[key])
}
if ('model' in product) {
    console.log("yes exists")
}
