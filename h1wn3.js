"use strict";
const ps = require("prompt-sync");
const prompt = ps();

//EQ3
const number = parseInt(prompt("Please Enter number: ")); 
if (number %2 ==0){
    console.log("number is even");

}else {
   console.log("number is odd");
}
