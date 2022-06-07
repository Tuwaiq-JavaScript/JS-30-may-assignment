// Medium

// 3-Write a program that finds least common denominator between two numbers entered by the user (bonus make it any amount of numbers) hint: the least common multiple is the smallest positive integer that is divisible by both a and b
// Example: the least common multiplier of 16 and 24 is 48

let num1 = 16;
let num2 = 24;

let aa = (num1 > num2) ? num1 : num2;

while (true) {
    if (aa % num1 == 0 && aa % num2 == 0) {
        console.log(`the least common multiplier of ${num1} and ${num2} is ${aa}`);
        break;
    }
    aa++;
}