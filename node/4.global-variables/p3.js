// console.log(process.mainModule);
// console.log(module);

const filename = process.mainModule.filename;
const dirname = process.mainModule.path;

console.log(filename);
console.log(dirname);
