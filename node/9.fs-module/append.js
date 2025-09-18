const fs = require("fs");

const content =
  "Hello, Mai Hun Jiyan Mai Hun Takatwar Mera gala surila meri awaj sunkey log ho jatey madhoos";

fs.appendFile("./append.txt", content, "utf-8", function (error) {
  if (error == null) {
    console.log("File written successfully");
  }
});
