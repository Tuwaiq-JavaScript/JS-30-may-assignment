const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});
}
// // //1
function name (n){
    console.log("welcome",n);  
}
readline.question("Enter a name you want to be called",name); 
// //OR
// //give value before enter <node index.js Hadi>then enter 
const username=process.argv[2];
console.log("welcome",username);

// //2
let x=2,y=2
let result =x+y
console.log(result)
//3
let x1=10,x2=13
if(x1%2==0){
    console.log(x1,"is even")
}
 if(x2%2==!0){
    console.log(x2,"is odd") 
}

//4
// program to generate fibonacci series up to n terms
// take input from the user
const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, sum;

console.log(' the fibonacci is:');
let i = 1
while (i <= number) {
    console.log(n1);
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
     i++
}

//5
const n = parseInt(prompt('Enter a positive integer: '));
if (n < 0) {
    console.log('Error! Factorial for negative number does not exist.');
}else if (n === 0) {
    console.log(`The factorial of ${n} is ${n}.`);
}else {
    let fact = 1;
    let i = 1;
    while ( i <= n ) {
        fact *= i;
        i++
    }
    console.log(`The factorial of ${n} is ${fact}.`);
}

//                                   Medium
//1
const arr=[]
let number = parseInt(prompt('enter any number until x to exite'));
 let resu;
 console.log(number);
for (let index = 0;number=!"x"; index++) {
    arr.forEach((number)=>arr.push(number));
    resu =number+number;
}

console.log("the result of numbers is :",resu);

//2
async function test(){
    let contacts=[];
    for (let i=0;i<2;i++) {
    let name =contacts.Name=await question('enter a name : ');
    contacts.push(name);
    let num=parseInt(contacts.Number=await question('enter the number : '));
    contacts.push(num);
}
console.log(contacts);
process.exit(0);
}
test();




//                                        HRAD