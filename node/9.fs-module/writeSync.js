const fs = require("fs");

const content = "Hello My name is Doremon";

try {
  fs.writeFileSync("./output.txt", content, "utf-8");
} catch (error) {
  console.log("Error", error);
}
