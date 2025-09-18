// How module.exports works

console.log(module); //[]

const x = 10;
const name = "ravi";
const sayHello = () => {
  console.log("hello");
};

const email = "awnish@gmail.com";
const password = "secret@123";

module.exports = {
  x,
  name,
  sayHello,
  email,
};

console.log(module);
