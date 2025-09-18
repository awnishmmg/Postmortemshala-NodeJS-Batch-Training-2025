const fs = require("fs");

const content = "Hello My name is Doremon \n";

try {
  fs.appendFileSync("./append.txt", content, "utf-8");
} catch (error) {
  console.log("Error", error);
}
