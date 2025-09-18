const fs = require("fs");

const filePath = "./awnish.txt";

console.log("================== code started ===============");

fs.readFile(filePath, "utf-8", function (error, data) {
  if (error == null) {
    console.log(data);
  } else {
    console.log("Error Reading file", error);
  }
});
console.log("==================code Ended ===============");
