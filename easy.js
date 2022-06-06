//1)Write a program to ask for the user's name and greets them
"use strict";

const ps = require("prompt-sync");
const prompt = ps();
const name = prompt('Enter your name: ');
console.log('hello ' + name);

//2)write a program that takes two numbers and returns the sum of both

"use strict";

const ps = require("prompt-sync");
const prompt = ps();


let number1 = prompt('Enter the number1 : ');
let number2 = prompt('Enter the number2 : ');
 let sum= Number(number1)+Number(number2);
 console.log('the sum is '+sum);

//3)Write a program that takes a number and determines if it's even or odd

"use strict";

const ps = require("prompt-sync");
const prompt = ps();


let number = prompt('Enter the number : ');


if(number % 2==0){
    console.log('the number is even');
} 
else{
    console.log('the number is odd');
}

//4)Implement the fibonacci sequence using javascript, allow a number input for the limit of the sequence
"use strict";

const ps = require("prompt-sync");
const prompt = ps();
let number = prompt('Enter the number of terms : ');

let num1=0 , num2=1 ,nextNum;

console.log('the Fibonacci Series :')

for(let i=1; i<=number;i++){
    console.log(num1);
   nextNum=num1+num2; 
   num1=num2;
   num2=nextNum;
    
}

//5)Build a program that calculates the factorial of a number given by the user
"use strict";

const ps = require("prompt-sync");
const prompt = ps();
let num = prompt('Enter the number of terms : ');


    if(num==0 || num==1){
        console.log(1);
    }
    else{
        for(let i=num-1;i>=1;i--){
            num *= i;
        }
        console.log('the factorial is '+ num) ;
    }
