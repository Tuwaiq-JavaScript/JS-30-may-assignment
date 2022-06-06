const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});
function question(query) {
	return new Promise((resolve) => {
		readline.question(query, resolve);
	});	
}

async function evOrOdd(){
    let number = await question('please, enter a number? ');
    number = parseInt(number);
    let type;
    if(number % 2 == 0){
    type="even";}
    else{
    type="odd";}
console.log('it is ' + type +' number');
readline.close();
}

evOrOdd();