
"use strict";

const ps = require("prompt-sync");
const prompt= ps();
const number = prompt('Enter Positive number: ');
if (number < 0) {
    console.log('Error! negative numbers does not have Factorial ');
}

else if (number == 0 || number==1) {
    console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
}
