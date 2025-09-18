const argv = process.argv;
const argc = process.argv.length;

let s = "";
for (let i = 2; i < argc; i++) {
  s = s + argv[i] + " ";
}

console.log(s);
