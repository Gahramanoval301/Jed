let ladder = {
    step: 0,
    can: 100,
    goUp(number = 1) {
        let cem = this.step + number
        if (cem > 20) {
            this.step = 0;
        }
        else {
            this.step = cem;
        }
    },
    goDown(number = 1) {
        if (number > 5 && number < 10) {
            this.can = this.can - 10;
        }
        else if (number > 10) {
            this.can = this.can - 20;
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
        console.log(this.step);
        console.log(this.can);
    }
};

ladder.goUp(2)
ladder.goUp(3)//5
ladder.goUp()//6
ladder.goDown(8)
ladder.showStep()
