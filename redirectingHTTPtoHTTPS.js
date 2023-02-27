const https = require("https");
const http = require("http");
const fs = require("fs");

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

https
  .createServer(options, (req, res) => {
    res.end("You've been successfully redirected to the https server!");
  })
  .listen(8081);

http
  .createServer((req, res) => {
    res.writeHead(301, {
      Location: "https://" + req.headers["host"] + req.url,
    });
    res.end("redirecting now");
  })
  .listen(8080);
