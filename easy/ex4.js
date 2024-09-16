/*4-Implement the fibonacci sequence using javascript, 
  allow a number input for the limit of the sequence*/
  "use strict";

const ps = require("prompt-sync");
const prompt= ps();
  const num = prompt('Enter The number: ');
let n1 = 0,  n2 = 1, nextTerm; 
console.log('Fibonacci Series:');
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= num) {

    // print the next term
    console.log(nextTerm);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
}