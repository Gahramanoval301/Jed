function makeFormal(name, cins) {
    if (cins === ' k' || cins === 'K') {
        console.log(`Salam cenab ${name}`)
    } else if (cins === 'q' || cins === 'Q') {
        console.log = (`Salam xanim ${name}`)
    } else {
        console.log("Wrong Input!")
    }
}
makeFormal('leman', 'q')