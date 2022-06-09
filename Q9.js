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
  let input = await question("Enter the special sequence (comma seperated) \n");
  let numbers = input.split(",");
  numbers = numbers.map((i) => +i);
  for (let i = 0; i < numbers.length; i=i + 3) {
    if (numbers[i] + numbers[i + 1] == numbers[i + 2]) {
      console.log(
        `numbers ${numbers[i]} + ${numbers[i + 1]} do equal ${numbers[i + 2]}`
      );
    }else{
        console.log(
            `numbers ${numbers[i]} + ${numbers[i + 1]} do not equal ${numbers[i + 2]}`
          );
    }
  }
  readline.close();
}
//invoking the main method
main();
