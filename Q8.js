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
  let input = await question("Enter two numbers (seprated by comma, )  \n");
  const numbers = input.split(",");

  let min = +numbers[0] > +numbers[1] ? +numbers[0] : +numbers[1];

  while (true) {
    if (min % numbers[0] == 0 && min % numbers[1] == 0) {
      console.log(`The LCM of ${numbers[0]} and ${numbers[1]} is ${min}`);
      break;
    }
    min++;
  }
  readline.close();
}
//invoking the main method
main();
