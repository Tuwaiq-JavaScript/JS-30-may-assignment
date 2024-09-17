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
let name = await question('What is your name? ');
console.log('Hi '+ name);
readline.close();
}

 run();