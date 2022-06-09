const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("enter a limit number? (space seperated)", function numbers(numbers) {
  let total = [1,2]
  for (let index = 0; index < numbers; index++) {
    if (numbers < 2){
      console.log(total)
    }else{
      total.push(total[index]+total[index+1])
    }
  }
  console.log(total)
  readline.close();
});
