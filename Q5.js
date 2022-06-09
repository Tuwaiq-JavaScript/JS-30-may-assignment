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
  let num = await question("Enter a Number  \n");
  const limit = +num
  if(limit > 0){
  for (let index = 1; index <limit ; index++) {
    num *= index
  }
  console.log(num);
}else{
  console.log(1);
}
  readline.close();
}
//invoking the main method
main();
