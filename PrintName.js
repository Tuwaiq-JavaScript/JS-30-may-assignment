

const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const question1 = () => {
  return new Promise((name) => {
    rl.question('what your name', (answer) => {
      console.log(`nice name: ${answer}`)
      name()
    })
  })
}


const main = async () => {
  await question1()
  rl.close()
}

main()