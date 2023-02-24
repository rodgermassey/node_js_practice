const http = require("http");
const fs = require("fs");
const path = require("path");
const { send404, mimeLookup } = require("./utilityFunctions");

const server = http
  .createServer((request, response) => {
    if (request.method === "GET") {
      let fileURL;
      let filePath;
      if (request.url === "/") {
        fileURL = "/index.html";
      } else {
        fileURL = request.url;
      }
      filePath = path.resolve("./public" + fileURL);
      let fileExt = path.extname(filePath);
      let mimeType = mimeLookup[fileExt];

      if (!mimeType) {
        send404(response);
      }

      fs.exists(filePath, (exists) => {
        if (!exists) {
          send404(response);
        }
        response.writeHead(200, { "content-type": mimeType });
        fs.createReadStream(filePath).pipe(response);
        // response.end(); Should not use response.end() as it will not give a call to the resources (css and JS files) that are attached within our index.js
      });
    } else {
      send404(response);
    }
  })
  .listen(8080);

console.log("The server is running at port 8080");

//************Changed implementation**************/
/*const http = require("http");
const fs = require("fs");
const path = require("path");
const { send404, mimeLookup } = require("./utilityFunctions");

const server = http
  .createServer((request, response) => {
    if (request.method === "GET") {
      let fileURL;
      let filePath;
      if (request.url === "/") {
        fileURL = "/index.html";
        filePath = path.resolve("./index.html");
      } else {
        fileURL = request.url;
        filePath = path.resolve("." + fileURL);
      }
      let fileExt = path.extname(filePath);
      let mimeType = mimeLookup[fileExt];

      if (!mimeType) {
        send404(response);
      }

      fs.exists(filePath, (exists) => {
        if (!exists) {
          send404(response);
        }
        response.writeHead(200, { "content-type": mimeType });
        fs.createReadStream(filePath).pipe(response);
        // response.end(); Should not use response.end() as it will not give a call to the resources (css and JS files) that are attached within our index.js
      });
    } else {
      send404(response);
    }
  })
  .listen(8080);

console.log("The server is running at port 8080");*/
