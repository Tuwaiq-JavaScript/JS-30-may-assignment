
"use strict";
const ps = require("prompt-sync");
const prompt = ps();
//Q2M

const name = prompt("Enter your name: ");
const number = parseInt(prompt("Enter your number: "));


console.log("{Name:"+name+","+"Number:"+number+"}");