const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter your Name? \n", (name) => {
  console.log(`hello ${name}`), readline.close();
});
