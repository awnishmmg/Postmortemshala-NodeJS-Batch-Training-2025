const argv = process.argv;
const argc = process.argv.length;

//index => in
//value => of

for (let i of argv) {
  console.log(i);
}
