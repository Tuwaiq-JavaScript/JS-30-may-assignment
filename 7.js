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
console.log('Please enter your contact information');	
let nam = await question(' enter yor name? ');
let num = await question(' enter yor phone number? ');
let contactinfo = [{name:nam, number: num}];
console.log('Name: '+contactinfo[0].name+ ' Phone number: '+contactinfo[0].number);
readline.close();
}
run();