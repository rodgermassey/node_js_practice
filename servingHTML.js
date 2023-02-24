const http = require("http");
const fs = require("fs");
const send404 = require("./utilityFunctions").send404;

const server = http.createServer((request, response) => {
  if (request.method === "GET" && request.url === "/") {
    response.writeHead(200, {
      "content-type": "text/html",
    });
    fs.createReadStream("./public/index.html").pipe(response);
  } else {
    send404(response);
  }
});

server.listen(8080);
console.log("The server is listening at port 8080");
