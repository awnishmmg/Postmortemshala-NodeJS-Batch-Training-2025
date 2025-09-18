//import http module
const http = require("http");
const package = require("./package.json");
const { version } = require("os");

//create server
const server = http.createServer(function (req, resp) {
  resp.writeHead(200, {
    "content-type": "application/json",
  });
  resp.write(
    JSON.stringify({
      message: "Welcome to Node App",
      code: 200,
      AppInfo: {
        name: package.name,
        version: package.version,
        description: package.description,
        author: package.author,
        license: package.license,
      },
    })
  );
  resp.end();
});
//listen to the port
const PORT = 7000;

server.listen(PORT, function () {
  console.log("Server Running at Port=", PORT);
});
