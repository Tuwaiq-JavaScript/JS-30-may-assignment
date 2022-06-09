const x =require("prompt-sync");
const prompt=x();
//Q1 Write a program to ask for the user's name and greets them
const firstname =process.argv[2]
console.log('Hello',firstname);

//Q2 write a program that takes two numbers and returns the sum of both
var num1 = 5;
var num2 = 3;
// add two numbers
var sum = num1 + num2;
// display the sum
console.log('The sum of is: ' + sum);

//Q3 Write a program that takes a number and determines if it's even or odd
var num=3;
if(num%2==0)
  console.log(num + " is an Even Number");
else
  console.log(num + " is an Odd Number");

//Q4 Implement the fibonacci sequence using javascript, allow a number input for the limit of the sequence
const number1 = prompt('Enter the number of terms: ');
let n1 = 0, n2 = 1, res;

console.log('Fibonacci Series:');

for (let i = 0 ; i <= number; i++) {
    console.log(n1);
    res = n1 + n2;
    n1 = n2;
    n2 = res;
}

//Q5 Build a program that calculates the factorial of a number given by the user
const number2 = prompt('Enter the number?');
const number3 = prompt('Enter the number?');
let result = number2 * number3 ;
console.log("The sum is " + result);

//Q1 Medium > write a program that takes any amount of numbers and returns the sum of them
 function getSum(x, y ,z) {
    {
       return x * y *z;
     }}
   console.log(getSum(3, 4 ,5));
//Q2 write a contacts program that asks for a name and a number and stores them as a contact, have a way to show the contacts 
   function contact (Name,Number){
    const contact=({'Name':Name ,'Number':Number})
    console.log(contact);
    }
    let Name= prompt("Enter your name: ");
    let Number = prompt("Enter your number: ");
    contact (Name,Number);









