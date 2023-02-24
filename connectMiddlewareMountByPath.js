const connect = require("connect");

const echo = (req, res, next) => {
  req.pipe(res);
};

connect()
  .use("/echo", echo)
  .use((req, res, next) => {
    res.end("hello wassup!");
  })
  .listen(8080);
