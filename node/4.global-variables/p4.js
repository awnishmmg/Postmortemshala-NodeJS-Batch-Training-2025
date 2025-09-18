const filename = process.argv[1];
console.log("filename:", filename);

const dirname = filename.split("\\").slice(0, -1).join("\\");
console.log(dirname);
