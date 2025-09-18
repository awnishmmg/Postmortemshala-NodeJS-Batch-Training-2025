/**
 *  type of input :
 *  command line input (argument)/compile time input (argument) : during compilation or before program execution
 *
 *  runtime input (argument) : during the execution of
 *  program
 */

//process is a global object
//argv : argument varaibles : array.
const argv = process.argv;
//argc : no of argument supplied
const argc = process.argv.length;

console.log(argv);
console.log(argc);
