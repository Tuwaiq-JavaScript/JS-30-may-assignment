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
let numbers = await question('please, enter the list of numbers? ');
let number = Array.from(numbers)
let intNumbers = number.map(str => {
    return Number(str);
  });
  let result = 0;
  for(let i=0;i<intNumbers.length;i++){
   result = result+intNumbers[i];
  }
console.log('The result = ' + result);
readline.close();
}
run();