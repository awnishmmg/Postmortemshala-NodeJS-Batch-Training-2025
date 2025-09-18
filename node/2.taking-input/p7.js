// import the read line
const readline = require("readline");

//create the interface
const I1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Ask the Question
I1.question("Enter the name:", function (name) {
  console.log(name);
  // close the Interface
  I1.close();
});
