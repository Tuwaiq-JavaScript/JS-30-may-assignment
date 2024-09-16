// Easy

//4-Implement the fibonacci sequence using javascript, allow a number input for the limit of the sequence
let number1 = 4;
let n1 = 0, n2 = 1, nextTerm;

console.log(number1);

for (let i = 1; i <= number1; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}