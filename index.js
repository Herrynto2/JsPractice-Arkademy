//import function axios ke var connect
const connect = require('axios');
//import file artitmatic.js ke index.js
const { summary, divide } = require('./src/aritmathic')


// console.log(kali(10, 2));
console.log(summary(12, 4));
console.log(divide(10, 2));








// const url = 'https://jsonplaceholder.typicode.com/todos/1'
// connect.get(url).then(function(result) {
//     console.log(result);
// })