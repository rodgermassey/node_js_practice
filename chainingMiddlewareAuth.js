const { auth } = require("./utilityFunctions");
const connect = require("connect");

connect()
  .use("/admin", auth)
  .use("/admin", (req, res, next) => {
    res.end("you entered the correct username and password");
  })
  .use((req, res, next) => {
    res.end("you have reached a public path");
  })
  .listen(8080, () => {
    console.log("the server is running at 8080");
  });
