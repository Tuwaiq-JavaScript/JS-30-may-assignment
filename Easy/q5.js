//Build a program that calculates the factorial of a number given by the user


const x= require("prompt-sync");
const prompt =x();


const num1 = parseInt(prompt('Enter the first number '));//parseInt()is used to convert the user input string to number
const num2 = parseInt(prompt('Enter the second number '));

//add two numbers
const sum = num1 + num2;

// display the sum
console.log(`The sum of ${num1} and ${num2} is ${sum}`);
