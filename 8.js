const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});	
}

function denominator(num){
    let arr =[];
    let j =1;
    for(let i=0;i<num ;i++){
        arr[i]= num*j++;
    }
    return arr;
}
async function run(){  
let num1 = await question(' Enter the first number ');
let num2 = await question(' Enter the secuned number ');
num1Array = denominator(num1);
num2Array = denominator(num2);
console.log(num1Array);
console.log(num2Array);

let x = Math.max(num1Array.length, num2Array.length);
for(let i=0;i<x ;i++){
    if(num1Array.includes(num2Array[i])){
      console.log(num2Array[i]); 
      break; 
    } 
}

readline.close();
}
run();