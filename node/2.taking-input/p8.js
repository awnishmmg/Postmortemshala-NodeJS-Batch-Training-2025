// import the read line
const readline = require("readline");

//create the interface
const I1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
// Ask the Question
I1.question("Enter 1st no:", function (no1) {
  I1.question("Enter 2nd no:", function (no2) {
    console.log(no1);
    console.log(no2);
    I1.close();
  });
});

// Ask the Question
