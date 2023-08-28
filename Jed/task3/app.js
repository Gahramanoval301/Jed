let cem = 0;

let dordReqemliEded = 4562
for (let i = 0; i < 4; i++) {
    let qaliq = dordReqemliEded % 10
    cem += qaliq
    dordReqemliEded = Math.floor(dordReqemliEded / 10)

}
console.log(cem)