const NumberPrompt = require("inquirer/lib/prompts/number");
const x =require("prompt-sync");
const prompt= x ();

//1-ask for the user's name and greets them
let name =prompt("Enter your name : ");
console.log("Hi  "+name);
console.log("-----------------------");
console.log("\n");

//*************************************************************** 

//2-akes two numbers and returns the sum of both
const num1 = parseInt(prompt('Enter the first number '));
const num2 = parseInt(prompt('Enter the second number '));
const sum3 = (num1 + num2);
console.log('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum3 );
console.log("-----------------------");
console.log("\n");

//*************************************************************** 

//3-akes a number and determines if it's even or odd
const number = prompt("Enter a number: ");
if(number % 2 == 0) {
console.log("The number is even.");}
else { console.log("The number is odd.");}
console.log("-----------------------");
console.log("\n");

//*************************************************************** 
//4-fibonacci sequence  allow a number input for the limit of the sequence
var a=0,b=1,result ;
let v =prompt("Enter the limt for fibonacci series : ");
console.log( "Fibonacci Series: "); 
for ( i = 1; i <= v; i++)  
{console.log(' \n' +a);
    result= a+b;
    a=b;
   b=result;
}
console.log("-----------------------");
console.log("\n");

//*************************************************************** 

//5-calculates the factorial of a number given by the user
const n1 = parseInt(prompt('Enter the first number '));
const n2 = parseInt(prompt('Enter the second number '));
const n3 = (n1 * n2);
console.log('The factorial of ' + n1 + ' and ' + n2 + ' is: ' + n3 );
console.log("-----------------------");
console.log("\n");


//*************************************************************** 

 //6-takes any amount of numbers and returns the sum of them
      let much =prompt("how many numberer you want to sum : ");
      let sum = 0;
      let ar=[];
      
      for(var i=0;i<much;i++){
        ar.push(Number(prompt("Enter the number you want to sum : ")));
      }
      for(var i=0;i<much;i++){
        sum+=ar[i];
      }
      console .log("Sum of the elements ::"+sum);

      //*************************************************************** 

//7-contacts program that asks for a name and a number and stores them as a contact
function contact (Name,Number){
    const contact=({'Name':Name ,'Number':Number})
    console.log(contact);
    }
    let Name= prompt("Enter your name: ");
    let Number = prompt("Enteryour number: ");
    contact (Name,Number);
console.log("-----------------------");
console.log("\n");

//******************************************************************** 

//8-calculate the lcm 
function Lcm(a, b)
{
if (b == 0)
    return a;
return Lcm(b, a % b);
}
function lcm2(a, b)
{
    return (a / Lcm(a, b)) * b;

}

//finds least common denominator between two numbers entered by the user
const xx = prompt("Enter first number: ");
const xxx = prompt("Enter secound number: ");
console.log ('the lcm of '+xx +' and ' + xxx +' is '+lcm2(xx, xxx));
console.log("-----------------------");
console.log("\n");

//********************************************************************** 



 
 



