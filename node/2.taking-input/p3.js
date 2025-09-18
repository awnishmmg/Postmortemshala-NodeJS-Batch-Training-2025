const argv = process.argv;
const argc = process.argv.length;

let sum = 0;
for (let i = 2; i < argc; i++) {
  sum = sum + Number(argv[i]);
}

console.log("Total=", sum);
const avg = sum / (argc - 2);
console.log("Average=", avg);
