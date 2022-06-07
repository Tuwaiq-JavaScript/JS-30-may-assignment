//Q1 hard
const operator = prompt('Enter operator to calculation either ( + , - , * or / ) ? ');  
// accept the number from the user   
const number_1 = parseFloat(prompt ('Enter the first number: '));  
const number_2 = parseFloat(prompt ('Enter the second number: ')); 
let result_1;   
// use if, else if and else  
if (operator == '+') { // use + (addition) operator to add two numbers  
    result_1 = number_1 + number_2;  
}  
else if (operator == '-') { // use -  (subtraction)  
    result_1 = number_1 - number_2;  
}  
else if (operator == '*') { // use * (multiplication) 
    result_1 = number_1 * number_2;  
}  
else {  
    result_1 = number_1 / number_2; // use / (division) 
} 
console.log(" Result is " + result_1); 
