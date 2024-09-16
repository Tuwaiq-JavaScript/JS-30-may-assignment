//Easy
// 1-Write a program to ask for the user's name and greets them
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter ur name : ', name => {
    console.log(`Wolcome  ${name}!`);
    readline.close();
  });