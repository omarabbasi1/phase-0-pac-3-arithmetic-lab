const { interfaces } = require("mocha")

function add(a,b){
    return a + b;
  }
  function subtract(a,b){
    return a - b;
  }
  function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
let a = 5
function increment(a) {
    a += 1;
    return a;
}
let b = 5
function decrement(b) {
    b -= 1
    return b;
}
function makeInt(n) {
    return parseInt(n, 10);
}
function preserveDecimal(n) {
    return parseFloat(n);
}
console.log(preserveDecimal(2.222));