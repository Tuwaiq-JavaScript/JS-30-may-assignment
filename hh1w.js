
"use strict";
const ps = require("prompt-sync");
const prompt = ps();
//EQ2
const num1 = parseInt(prompt( "Please Enter the first number: ")); 
const num2 = parseInt(prompt("Please Enter the second number: "));
const sum = num1 + num2;
console.log(sum);
