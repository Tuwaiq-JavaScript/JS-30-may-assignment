//1
//const username = prompt("Enter a username: ");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
function username (n){
    console.log("welcome",n);  
}
readline.question("Enter a name you want to be called",username);


//2
const a=3;
const b=5;
let x=a+b;
console.log( x);


//3
/*
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  function rana (n){
    

if (n%2==0){
console.log("The number is even ");
else {
console.log("The number is odd");
}
}
readline.question(rana);*/
//3

let number=5;
if (number%2==0){
console.log("The number is even ");}
else {
console.log("The number is odd");
}

  //4
  
 
  function rana (n){
    
    let n1 = 0, n2 = 1, nextTerm;
    for (let i = 1; i <= n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
readline.question("Fibonacci Series:",rana);



//---------------------------------------------------------------------
//1

const n1=process.argv[2]
console.log("Enter The number",n1);
const n2=process.argv[2]
console.log("Enter The number",n2);
var sum=n1+n2;
console.log("the result ",sum);
/*const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter the number ', function (number) {
  rl.question('Enter the number ', function (number) {
    var sum=number+number;
    console.log(sum);
    rl.close();
  });
});*/
//2
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}
    async function rana(){
        let Name= await question("Enter your name: "); 
        let Number = await question("Enteryour number: "); 
    const ifo=({'Name':Name ,'Number':Number})
    console.log(ifo);
    }

    rana();
//3
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}async function rana(){
let number =await question ('Enter a positive integer: ');


if (number < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}


else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
}

else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);}}
    rana();




    