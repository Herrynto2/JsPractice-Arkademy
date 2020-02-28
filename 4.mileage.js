//Cara Gue
function hitjarak(Va, Sa) {
    //jarak 10:25:21 - 10:36:21 //Va = 6, Sa = 11 m
    let jarak1 = 0;
    let detik = 60;
    jarak1 = Va * (Sa * detik);
    console.log(`${jarak1} m`);

    //jarak 10:36:21 - 10:46:21
    Va += 1;
    Sa -= 1;
    jarak1 += Va * (Sa * detik);
    console.log(`${jarak1} m`);

    //jarak 10:46:21 - 12.00 = 73m 39s = 7x // 8+ 7 = 15
    for (let Va = 8; Va <= 15; Va++) {
        jarak1 += Va * (Sa * detik);
    }
    console.log(`${jarak1} m`);
}
hitjarak(6, 11);

