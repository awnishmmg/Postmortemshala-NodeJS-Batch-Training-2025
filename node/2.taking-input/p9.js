// import the read line
const readline = require("readline");

//create the interface
const I1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

I1.question("Enter the n value:", function (n) {
  let i = 0;
  takeInput(i, n);
});

function takeInput(i, n) {
  if (i == n) {
    I1.close();
  } else {
    I1.question(`Enter the ${i + 1} value:`, function (no1) {
      console.log(no1);
      i++;
      takeInput(i, n);
    });
  }
}
