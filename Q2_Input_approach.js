const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("enter two numbers? (space seperated)", function numbers() {
  const nums = numbers.split(" ");
  console.log(
    `the sum of ${nums[0]} + ${nums[1]} = ${
      parseInt(nums[0]) + parseInt(nums[1])
    }`
  );
  readline.close();
});
