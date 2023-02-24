const connect = require("connect");

const echo = (req, res, next) => {
  //   console.log(req);
  req.pipe(res);
};

connect().use(echo).listen(8080);
