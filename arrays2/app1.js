//getFamilyInfo('ali', 'pakize', 'test1' , 'test2' . 'javascript')
//{
// father: ali,
//     mom: pakize
// child1:
// child2:
//         chil3:
// }
function getFamilyInfo(...args) {

    let family = {
        father: args[0],
        mother: args[1],
    }
    const usaqlar = args.slice(2);
    usaqlar.forEach((ad, index) => {
        family[`child${index + 1}`] = ad;
    })
    return family;
}
console.log((getFamilyInfo('rahib', 'pakize', 'leman', 'aydan')));
console.log((getFamilyInfo('rahib', 'pakize', 'leman'))); 