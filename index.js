//Easy

// 1-Write a program to ask for the user's name and greets them

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
  console.log(`Oh, so your name is ${answer}`);
  console.log("heelo");
  rl.close();
});


