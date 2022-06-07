// Medium

//1-write a program that takes any amount of numbers and returns the sum of them

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('int num? ', (num1) => {
    rl.question('int num? ', (num2) => {

let num11 = num1;
let num22 = num2;

let sum = num11+ num22;

console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);

    })})