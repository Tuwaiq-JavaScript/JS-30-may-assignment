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
let number = await question('please, enter a number? ');
let fac = 1;
for(let x=1;x<=number;x++){
fac= fac * x;
}
console.log(fac);
readline.close();
}
run();