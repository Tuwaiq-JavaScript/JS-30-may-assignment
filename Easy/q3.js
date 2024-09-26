//Write a program that takes a number and determines if it's even or odd


const x= require("prompt-sync");
const prompt =x();


let number =prompt("Enter the number :");
//check  the number is even
if(number % 2 == 0) {
    console.log("The number is even");
}

// number is odd
else {
    console.log("The number is odd ");
} ;


