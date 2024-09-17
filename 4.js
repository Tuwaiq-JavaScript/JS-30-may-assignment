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
number = parseInt(number);
const arr =[0,1];
if(number>=2){
for(let i=0;i<number-2;i++){
     arr.push(arr[i]+arr[i+1]);
    }   
}
console.log(arr);
readline.close();
}
run();