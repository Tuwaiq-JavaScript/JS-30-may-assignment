// // Easy

// //3-Write a program that takes a number and determines if it's even or odd











const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// const number = prompt("Enter a number: ");

rl.question(' enter the number : ', (num) => {
    
 if (num % 2 == 0) {
    console.log("The number is even.");
}

    else {
    console.log("The number is odd.");
}    
      
    });