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
  // this while loop will work with the input and
  //ask the user till he/she writes exit
  const help_msg = `Enter "add" followed by a contact's name and number to add a contact (seperated by a space),
  Enter "show" to show your contacts,
  Enter "update" followed by a contact's name and number to update an existing contact's number (seperated by a space)
  Enter "delete" followed by a contact's name and number to delete an existing contact (seperated by a space)
  Enter "help" to see this message again
  Enter "exit" to end the program\n`;
  console.log(help_msg);
  let contacts = [];
  while (true) {
    // you can use as many of these as you want
    let input = await question(">");
    let seperated_input = input.split(" ");
    let [command, contact, number] = seperated_input;
    if (command == "exit") {
      break; //
    }
    if (command == "show") {
      contacts.map(item=>console.log(item));
      continue; // to skip
    }
    if (command == "add") {
      contacts.push({ name: contact, Number: number });
    }
    if (command == "update") {
      contacts = contacts.filter((item) => item.name != contact);
      contacts.push({ name: contact, Number: number });
    }
    if (command == "delete") {
      contacts = contacts.filter((item) => item.name != contact);
    }
    if (command == "help") {
      console.log(help_msg);
    }
  }
  console.log("Thank you for using Contacty");
  readline.close();
}
//invoking the main method
main();
