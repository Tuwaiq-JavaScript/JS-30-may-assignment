//3-Write a program that takes a number and determines if it's even or odd
  
"use strict";

const ps = require("prompt-sync");
const prompt= ps();

  function getNum(){
    const num = prompt('Enter The number: ');
    if(num %2==0){
        console.log("Even number")
    }
    else{ 
        console.log("Odd number")
    }
    
  }
  getNum();