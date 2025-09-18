const fs = require("fs/promises");

const filePath = "./awnish.txt";

async function getFileContent(filePath) {
  const result = await fs.readFile(filePath, "utf-8", function (error, data) {
    if (error == null) {
      return data;
    } else {
      return error;
    }
  });

  return result;
}

getFileContent(filePath)
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
