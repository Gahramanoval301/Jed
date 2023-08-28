const product = {
    model: 'xiomi',
    price: 1200,
    "background-color": 'red'
}
console.log(product.price)
product.price -= 200;
console.log("Discount on price of product")
console.log(product.price) //1000
console.log(product["background-color"]) //dynamic/bracket notation -> red

let a = 'background-color' // a -> bg'i gosterecek
console.log(product[a]) // ->red //! product['a'] = product.a = undefined!

for (let key in product) {
    console.log(product[key]) // xiomi , 1000, red //! product.key  -> undefined
    //! key ->model, price, bg //! product- 3 dene ozunden(object)
}
if ('model' in product) {
    console.log("yes exists")
}
