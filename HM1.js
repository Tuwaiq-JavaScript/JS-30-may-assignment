//________Easy______________
//Q1
function question(query) {
  return new Promise((resolve) => {
      readline.question(query, resolve);
  });
}
const readline = require('readline').createInterface({
input : process.stdin,
output : process.stdout
});
readline.question(`please insert your name `,name=>{
    console.log(`thnks ${name} to  entert your name`)
    readline.close();
})
//_____________________________________
//Q2
async function insertUser(Number,Number1) {
  Number=await question(`enter first number `)
  Number1=await question(`enter second number `)
  if(Number >0 && Number1 >0){
    console.log(parseInt(Number)+parseInt(Number1))
  }
 else
 console.log("please inter a large number")
 process.exit();
}
insertUser()

//_____________________________________
//Q3
function EveenOrOdd(){
let c = 20;
if(c %2 ==0){
  console.log("number is eveen")
}
else
console.log("number is odd")
process.exit();
}
EveenOrOdd()

//_____________________________________
//Q4
function fibonacciSequence(){
let num = [0, 1]; 

for (let i = 2; i <= 11; i++) {
  
  num[i] = num[i - 2] + num[i - 1];
  console.log(num[i]);
}
}
fibonacciSequence()
process.exit()

  //_____________________________________
//Q5

 function factorial(){
  let fac = 1;
  if (n <=1 ){
    console.error("please insert a large number")
    process.exit();
  }else{
    for(let i = n; i >= 1; i--){
      fac = fac * i;
    }
    return fac;
  }  
}
 n= 6;
fac = factorial(n)
console.log(`the factorial of ` + n + " is " + fac);
process.exit();

//__________Medium_________
//Q1
function sum(){
   const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum);
}
sum()
//_________________________________
//Q2
  
  const readline = require("readline");
  const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
  });
  rl.question("What is your name  ", function(name) {
    rl.question("What is your number  ", function(number) {
        console.log(`\n{Name:${name},Number:${number}}`);
        rl.close();
    });
});
rl.on("close", function() {
    process.exit(0);
});
//_________________________________
//Q3

let deno = (n1, n2) => {
    let large = Math.max(n1, n2);
    let small = Math.min(n1, n2);
    let i = large;
    while(i % small !== 0){
      i = i + large;
    }
    return i;
  }
  console.log(deno(16, 24));
  //_________________________________
//Q4
let number = [5,6,11,7,2,10,5,2,7];
function gg(){
if(number[0] + number[1] == number[2]){
  console.log(`number    ${number[0]} +` +` ${number[1]}  `+ `do equal   ${number[2]}`)
  
}else
  console.log(`number   + ${number[0]} ` +` ${number[1]}  `+ `do not equal   ${number[2]}`)
    
    }
function dd (){
  if(number[3] + number[4] == number[5]){
    console.log(`number    ${number[3]} +` +` ${number[4]}  `+ `do equal   ${number[5]}`)
    
  }
  else{
    console.log(`number   + ${number[3]} ` +` ${number[4]}  `+ `do not equal   ${number[5]}`)
      
    }
}
gg()
 dd() 
process.exit()




 