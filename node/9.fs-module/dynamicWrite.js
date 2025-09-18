const readline = require("readline");
const fs = require("fs");

const I1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

I1.question("Enter the content:", function (data) {
  fs.writeFile("./data.txt", data, "utf-8", function (error) {
    if (error == null) {
      console.log("data written successfully");
      I1.close();
    }
  });
});
