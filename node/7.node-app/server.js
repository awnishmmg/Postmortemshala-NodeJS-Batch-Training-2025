//import http module
const http = require("http");
//create server
const server = http.createServer(function (req, resp) {
  resp.writeHead(200, {
    "content-type": "application/json",
  });
  resp.write(
    JSON.stringify({
      message: "Welcome to Node App",
      code: 201,
      error: "No Error",
    })
  );
  resp.end();
});
//listen to the port
const PORT = 7000;

server.listen(PORT, function () {
  console.log("Server Running at Port=", PORT);
});
