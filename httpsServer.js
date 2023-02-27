const https = require("https");
const fs = require("fs");

const options = {
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem"),
};

https
  .createServer(options, (req, res) => {
    res.end("You have successfully created an https server!");
  })
  .listen(8080, () => {
    console.log("the server is listening at 8080");
  });
