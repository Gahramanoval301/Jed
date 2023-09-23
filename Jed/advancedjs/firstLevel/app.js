const product = {
    name: 'Redmi Note 11 Pro 5G',
    price: '500$',
    store: {
        name: 'Kontakt home',
        location: 'Ahmedli'
    }
}

showInfo(product);
function showInfo({ name: productName, price, store: { name: storeName, location } }) {
    console.log(`We've ${productName} in ${storeName} in ${location}. Phone costs ${price}`)

}

