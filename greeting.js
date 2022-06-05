const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  // using string interpolation to get the user name 
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });