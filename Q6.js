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
  let input = await question(
    "Enter any number of numbers (seprated by comma, e.g. 5,6,4,8,6,3)  \n"
  );
  const numbers = input.split(",");
  const result = numbers.reduce((num1, num2) => parseInt(num1) + parseInt(num2));
  console.log(result);
  readline.close();
}
//invoking the main method
main();
