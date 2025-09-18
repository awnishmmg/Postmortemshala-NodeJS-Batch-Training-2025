//How to define window object and document object

var window = {
  alert: function (message) {
    console.log(message);
  },
};

var document = {
  write: function (message) {
    console.log(message);
  },
};

window.alert("Hello from alert");
document.write("hello from document");
