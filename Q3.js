const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(query) {
  return new Promise((resolve) => {
    readline.question(query, resolve);
  });
}

async function main() {
  const num = await question("Enter a Number  \n");
  if (+num == 0) console.log("zero is neither");
  else console.log(`the number entered is ${num % 2 == 0 ? "even" : "odd"}`);
  readline.close();
}
//invoking the main method
main();
