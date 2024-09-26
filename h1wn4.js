"use strict";
const ps = require("prompt-sync");
const prompt = ps();
//EQ4
const number = parseInt(prompt("Enter a positive number: "));
let num1 = 0, num2 = 1, nextTerm;

console.log("Fibonacci Series: ");
console.log(num1); 
console.log(num2); 

nextTerm = num1 + num2;

while (nextTerm <= number) {

   console.log(nextTerm);

    num1 = num2;
    num2 = nextTerm;
nextTerm = num1 + num2;
}
