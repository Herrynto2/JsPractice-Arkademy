const fibo = function(nilai) {
    let a = 0; // 1 1 2
    let b = 1; // 1 2 3
    let c = 1;
    let hasil = "";
    for (let i = 1; i <= nilai; i++) {
        c = a + b;
        a = b;
        b = c;
        hasil += c + ", ";
    }
    console.log(hasil);
}
module.exports = fibo;