const argv = process.argv;
const argc = process.argv.length;

const first_name = argv[2];
const last_name = argv[3];
const full_name = first_name + " " + last_name;

console.log(full_name);
