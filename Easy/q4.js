//Implement the fibonacci sequence using javascript, allow a number input for the limit of the sequence

const ps = require("prompt-sync");
const prompt=ps();

let number = prompt('Enter the number :');
let num1 =0;
let num2= 1;
let nextNum;

console.log(" the fibonacci ");
   
for (let i=0; i<=number; i++){


        console.log(num1);
        nextNum= num1 + num2;
          num1 = num2;
          num2 = nextNum; 
}