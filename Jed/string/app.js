//! T1
let cumle1 = "today we're gonna learn strings on JavaScript ";
let firstLetter = cumle1.slice(0, 1);
let netice1 = firstLetter.toUpperCase()
for (i = 1; i < cumle1.length; i++) {
    netice1 += cumle1[i];
}
console.log(netice1)

//T2
let cumle2 = "today we're gonna learn strings on JavaScript ";
let firstO = cumle2.indexOf('o');
let lastO = cumle2.indexOf('o', firstO + 1);
let netice2 = cumle2.slice(firstO, lastO + 1);
// let netice2 = cumle2.slice(1, lastO);
console.log(netice2);

