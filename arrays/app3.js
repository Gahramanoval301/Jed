
function countWords(sentence) {
    let arrWords = sentence.split(' ');

    for (let i = 0; i < arrWords.length; i++) {
        console.log(`${arrWords[i]} ${arrWords[i].length}`);
    }
}


countWords('John the second is the son of John  the first')