//1.Write a program to ask for the user's name and greets them
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey welcom ${name}!`);
    readline.close();
  });

  //2.write a program that takes two numbers and returns the sum of both

  let a = 2;
let b = 3;
let sum = a + b ;
console.log(sum);

//3.Write a program that takes a number and determines if it's even or odd

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (num) => {
    
 if (num % 2 == 0) {
    console.log("The number is even.");
}

    else {
    console.log("The number is odd.");
}    
      
    });

    //4.Implement the fibonacci sequence using javascript, allow a number input for the limit of the sequence

    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    rl.question('Please enter the first number : ', (n) => {
    
    
    
    
    function fibonacci(n) {
        if (n < 2){
            return 1;
        }else{
            return fibonacci(n-2) + fibonacci(n-1);
        }
    }
    
    console.log(fibonacci(n));

    //5.Build a program that calculates the factorial of a number given by the user

    const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (num) => {
 if (num === 0) {
    console.log(`The factorial of ${num} is 1.`);
}

//6.if number is positive
else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);
}
});

//7.write a program that takes any amount of numbers and returns the sum of them
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (num1) => {
    rl.question('Please enter the second number : ', (num2) => {
        var result = (+num1) + (+num2);
        console.log(`The sum of above two numbers is ${result}`);
        rl.close();
    });
});

//8
//LC القاسم 
const number1 = 4;
const number2 = 6;

// looping from 1 to number1 and number2 to find HCF
for (let i = 1; i <= number1 && i <= number2; i++) {

    
    if( number1 % i == 0 && number2 % i == 0) {
        hcf = i;
    }
}

// find LCM
let lcm = (number1 * number2) / hcf;

console.log(`HCF of ${number1} and ${number2} is ${lcm}.`);

//5.Given an array of numbers, you are required to convert each 3 entries to a line that sums the first 2 and checks if the result equals the thrid number and then repeats the cycle Example
function isEqual()
	{
	 let a = [1, 4, 3, 5];
	  // Comparing each element of array
	   for(let i=0;i<a.length;i++){
	     if([0] + [1] === [2] ){
		     return " Equal";
         }else{
		return " not Equal";
		}
	  }
    }
	
console.log(isEqual());

//1.write a cli (command line application) calculator application that supports addition, subtraction, multiplication, divition, for two numbers only
const readline = require("readline");

// Creating our interface
const calcInterface = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	// prompt: "DefectiveDetective> ",
});

const validOperators = [
	"*",
	"-",
	"+",
	"/",
];

calcInterface.question("Enter the first number: ", (firstInput) => {
	const firstNumber = Number(firstInput);
	if(isNaN(firstNumber)) {
		// Invalid number provided
		console.log("Invalid number provided");
		return calcInterface.close();
	}

	calcInterface.question("Enter the operator: ", (operatorInput) => {
		if(!validOperators.includes(operatorInput)) {
			// Invalid operator provided
			console.log("Invalid operator provided");
			return calcInterface.close();
		}

		calcInterface.question("Enter the second number: ", (secondInput) => {
			const secondNumber = Number(secondInput);
			if(isNaN(secondNumber)) {
				// Invalid number provided
				console.log("Invalid number provided");
				return calcInterface.close();
			}

			const result = calculatorLogic(firstNumber, operatorInput, secondNumber);

			console.log(`Your Result: ${result}`);
			calcInterface.close();
		});
	});
});

function calculatorLogic(firstNumber, operator, secondNumber) {
	if(operator === "+") return firstNumber + secondNumber;
	else if(operator === "-") return firstNumber - secondNumber;
	else if(operator === "*") return firstNumber * secondNumber;
	else if(operator === "/") return firstNumber / secondNumber;
}
