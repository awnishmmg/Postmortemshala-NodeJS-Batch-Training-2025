const circular = require("./circular-dependency");

console.log("This is a some file");
module.exports = circular;
console.log("This is a some file");
console.log(module);

// The file which we are executing cannot be itself
// exported.
