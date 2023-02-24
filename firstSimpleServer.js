const http = require("http");

const server = http.createServer((request, response) => {
  console.log("The server is up and running");
  console.log(request.headers);

  console.log("method =>", request.method);
  console.log("url =>", request.url);
  response.statusCode = 404;
  response.write(
    `hello client! Did you make a request using,
    ${request.method},
     method with this url:,
    ${request.url}\n`
  );
  response.end("It was nice to meet you.");
});

server.listen(8080);
console.log(" This server will be listening on port: 8080");
