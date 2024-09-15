//1)write a program that takes any amount of numbers and returns the sum of them
function addNum(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;

}

console.log(addNum(9,3,8));

//2)$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$
"use strict";
const ps = require("prompt-sync");
const prompt = ps();
let person =[ {
    name:"",
    phonenumber:""},
{
    name:"",
    phonenumber:""}
];
  person.name = prompt("Please enter your name: ");
  person.phonenumber = prompt("Please enter your phone number");
  //let perArr=[{Name:'',phonenumber:''},{Name:'',phonenumber:''}];
person.forEach(element => console.log('{name :'+element.name+''+'phone number:'+element.phonenumber+'}'));
  console.log(person);
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//3)Write a program that finds least common denominator between two numbers 
const num1 = prompt('Enter number1: ');
const num2 = prompt('Enter number2: ');

let min;
if(num1>num2){
min=num2;
}
else{
min=num1;
}
while (true) {
    if (min % num1 == 0 && min % num2 == 0) {
        console.log(`The LCM of ${num1} and ${num2} is ${min}`);
        break;
    }
    min++;
}
//4)Given an array of numbers, you are required to convert each 3 entries to the sum of first2 elem
let arr1=[5,6,11,7,2,10,5,2,7];
 for(let i=0;i <arr1.length;i=i+3){
 if(arr1[i]+arr1[i+1]===arr1[i+2]){
 console.log('The sum of ' +arr1[i] +' and ' +arr1[i+1] +' is equal to '+arr1[i+2]);
 }else{
  console.log('The sum of ' +arr1[i] +' and ' +arr1[i+1] +' is not equal to '+arr1[i+2]);

 }
 }
