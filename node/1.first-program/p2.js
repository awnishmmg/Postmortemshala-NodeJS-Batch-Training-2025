//in node we donot have bom and dom

try {
  window.alert("Hello from alert");
} catch (ReferenceError) {
  console.log("Node Does Not Window Object");
}

try {
  document.writeln("<h1> This is Heading</h1>");
} catch (ReferenceError) {
  console.log("Node Does Not document Object");
}
