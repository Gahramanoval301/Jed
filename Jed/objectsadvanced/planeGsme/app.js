const plane = {
    speed: 0,
    qazVer(isNitro = false) {
        if (isNitro) {
            this.speed += 100;
        } else {
            this.speed += 40;
        }
    },
    tormoz() {
        this.speed -= 20;
    },
    tryFly() {
        if (this.speed < 200)
            console.log(`men ${this.speed} ile uca bilmerem`);
        else {
            console.log(`beli men ${this.speed} suretle uca bilerem`);
        }

    },
    land() {
        if (this.speed > 200) {
            console.log(`sen ${this.speed} ile yere ensen, OLECEKSEN`);
        }
        else {
            this.speed = 0;
            console.log(`suret 0-lan'di ve artiq yerdesen`);
        }

    }
}

plane.qazVer(true)
plane.qazVer(true)
plane.qazVer()
console.log(plane.speed)
plane.tryFly()
plane.land()