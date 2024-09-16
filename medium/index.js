
//-------------------------
//Medium Question
function sumOfNumbers(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
      sum=sum+arguments[i];
    }
    return sum;
  }
  console.log(sumOfNumbers (8,7,10,9));

  //------------------------------
/* Ex3:Write a program that finds least common denominator 
between two numbers entered by the user */
  "use strict";

  const ps = require("prompt-sync");
  const prompt= ps();
  const num1 = prompt('Enter a first positive integer: ');
  const num2 = prompt('Enter a second positive integer: ');
  
  // higher number among number1 and number2 is stored in min
  let min=0;
  if (num1<num2){
      min=num2;
  }else{
      min=num1;
  }
  
  // while loop
  while (true) {
      if (min % num1 == 0 && min % num2 == 0) {
          console.log(`The LCM of ${num1} and ${num2} is ${min}`);
          break;
      }
      min++;
  }
  
 /*4-Given an array of numbers, you are required to convert each 3 entries to a
  line that sums the first 2 and checks if the 
 result equals the thrid number and then 
 repeats the cycle Example*/
 let arr=[5,6,11,7,2,10,5,2,7];

 for(let i=0;i <arr.length;i=i+3){
 if(arr[i]+arr[i+1]===arr[i+2]){
 console.log(`The sum of ${arr[i]} and ${arr[i+1]} is equal to ${arr[i+2]}`);
 }else{
 console.log(`The sum of ${arr[i]} and ${arr[i+1]} is not equal to ${arr[i+2]}`);
 }
 }