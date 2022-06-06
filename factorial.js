// // // var number = 2;
// // // if (number < 0) {
// // // console.log('Error');
// // // }

// // // elseif (number === 0) 
// // // {
// // //     console.log(`he factorial of ${name} is 1`);
// // // }
// // // else
// // // {
// // //  let fact = 1;

// // // for(i = 1; i<= number; i++){
// // // fact *= i;
// // // }

// // // console.log(fact);
// // // }


// const readline = require ('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// readline.question ('Give me the number!!', (NumberInput) => {
//   const MyInput = Number(NumberInput);
//   // if (readline == 0 || readline == 1){
//   //   return readline.close()
//   // }
//   // else{
//   //   for(let i = readline; i >= 1; i--){
//   //     answer = answer * i;
//   //   }
//   //   return answer;
//   // }
//   const factorial (MyInput){
//     if (readline == 0 || readline == 1){
//       return readline.close()
//     }
//  else{
//     for(let i = readline; i >= 1; i--){
//       answer = answer * i;
//   }
// }) 
// const answer = culcolate(MyInput)
// console.log(answer);

// const readline = require ('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })

// function factorial(){
//   readline.question('GIve me the number!!!', (InputNumber) => {
// const MyInput = Number(InputNumber);
    
// if (MyInput == 0 || MyInput == 1){
//   return answer;
// }
    
    
//     // let answer = 1;
//     else{
//       for(var i = MyInput; i >= 1; i--){
//         answer = answer * i;
//       }
//       return answer;
//     }
//   })
//   }
//   answer = factorial(MyInput)
//   console.log("The factorial of " + MyInput + " is " + answer);
// readline.close();


// const readline = require ('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// })
//   readline.question('GIve me the number!!!', (InputNumber) => {
// const MyInput = Number(InputNumber);

//   })

//   const factorial = n => (n <= 0) ? 1: n * factorial(n - 1);

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter the first number : ', (num) => {
 if (num === 0) {
    console.log(`The factorial of ${num} is 1.`);
}

// if number is positive
else {
    let fact = 1;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log(`The factorial of ${num} is ${fact}.`);

}
});
