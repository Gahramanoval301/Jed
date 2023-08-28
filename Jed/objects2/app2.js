alert(`Start the game with me!`)
alert(`'THE RULERS OF GAME'
The ladder have 20 step (from 0)
if you want to down -> write the console: goDown() or goDown(step what you want) //goDown(2)
if you want to up -> write the console: goUp() or goUp(step what you want) //goUp(9)
if you want your caterogies the  write the console: showStep();
`)
if (confirm('Did you want to play the game with me?')) {
    let ladder = {
        step: 0,
        can: 80,
        goUp(number = 1) {
            let cem = this.step + number //TODO ! this = ladder !
            if (cem > 20) {
                this.step = 0;
                this.can = 0;
                console.log('You are died.....')
            }
            else {
                this.step = cem;
            }
        },
        goDown(number = 1) {
            if (number > 5 && number < 10) {
                this.can = this.can - 15;
            }
            else if (number > 10) {
                this.can = this.can - 30;
            }
            let ferq = this.step - number
            if (ferq < 0) {
                this.step = 0;
            }
            else {
                this.step = ferq;
            }
        },
        showStep() {
            console.log(`You are in ${this.step} step just now`);
            console.log(this.can);
            if (this.can === 50) {
                console.log('You are in safe')
            }
            else if (this.can === 100) {
                console.log('You are best millord!!!!!')
            }
            else if (this.can < 50 && this.can > 0) {
                console.log('HEYYYY You are in hospital!!!!!!!!!!!!!!!!!!')
            }
            else if (this.can <= 0) {
                console.log('HEY YOU ARE DIED NOW');
            }


        }
    };
    ladder.goUp(2)
    ladder.goUp(3)
    ladder.showStep()
    ladder.goUp(10)
    ladder.goDown(8)
    ladder.goDown(12)
    ladder.showStep()
    ladder.goDown(6)
    ladder.goUp(20)
    ladder.goUp(20)
    ladder.goDown(20)
    ladder.goDown(20)
    ladder.goDown(20)
    ladder.showStep()


}
else {
    alert('bay bay!')
}


