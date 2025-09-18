// import the read line
const readline = require("readline");

//create the interface
const I1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

I1.question("Enter the n value:", function (n) {
  let i = 0;
  const params = takeInput(i, n, []);
});

function takeInput(i, n, params = []) {
  if (i == n) {
    I1.close();
    console.log(sumofArray(params));
  } else {
    I1.question(`Enter the ${i + 1} value:`, function (no1) {
      params.push(no1);
      i++;
      return takeInput(i, n, params);
    });
  }
}

function sumofArray(arr) {
  let sum = 0;
  for (let i of arr) {
    sum = sum + Number(i);
  }
  return sum;
}
