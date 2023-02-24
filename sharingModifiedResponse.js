const connect = require("connect");
const { jsonParsingFunction } = require("./utilityFunctions");

connect()
  .use(function parseJSON(req, res, next) {
    if (req.headers["content-type"] == "application/json") {
      // Load all the data
      var readData = "";
      req.on("readable", function () {
        readData += req.read();
      });
      // Try to parse
      req.on("end", function () {
        try {
          let sendReadData = readData.substring(0, readData.length - 4);
          req.body = JSON.parse(sendReadData);
        } catch (e) {}
        next();
      });
    } else {
      next();
    }
  })
  .use((req, res, next) => {
    try {
      res.end(JSON.stringify(req.body));
      next();
    } catch (err) {
      console.log(err);
    }
  })
  .listen(8080, () => {
    console.log("the server is running at : 8080");
  });
