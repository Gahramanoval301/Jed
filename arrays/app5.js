const arr = ['ali', 'zahid', 'aydan', 'nail', 'leman', 'lale'];

//uzunlugu 5 e beraber olan elementler
const length5 = arr.filter((ad) => ad.length === 5)
console.log(length5);
//elmentin sonu n ile qurtaran elementler
const endWithN = arr.filter((ad) => ad[ad.length - 1] === 'n')//! endsWith('n')
console.log(endWithN)