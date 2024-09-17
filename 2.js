const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});	
}

async function run(){
let num1 = await question('please, enter the first number? ');
let num2 = await question('please, enter the second number? ');
num1 = parseInt(num1);
num2 = parseInt(num2);
console.log(num1 + num2);
readline.close();
}
run();


