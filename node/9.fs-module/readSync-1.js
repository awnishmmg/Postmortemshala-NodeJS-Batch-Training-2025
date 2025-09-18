const fs = require("fs");

const BufferData = fs.readFileSync("./awnish.txt");

console.log("Buffer Data =", BufferData);

const stringData = Buffer.from(BufferData).toString();

console.log("String Data = ", stringData);
