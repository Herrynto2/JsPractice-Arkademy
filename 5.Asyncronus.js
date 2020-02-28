const getData = new Promise(function(resolve, reject) { // (callback, error => ketika data yang diambil error)
    setTimeout(function() {
        resolve('Helo');
    }, 2000)
    setTimeout(function() {
        reject('error');
    }, 3000)
})

getData.then(function(val) { //then berfungsi untuk mengembalikan resolve(callback)
    console.log(val);
    console.log('world');
}).catch(function(err) { //catch berfungsi untuk mengembalikan reject(error)
    console.log(err);
})