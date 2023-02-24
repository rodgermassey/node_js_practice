const connect = require("connect");

const logit = {
  handle: (req, res, next) => {
    console.log(req.headers["content-type"]);
    req.pipe(res);
  },
};

connect()
  .use(logit)
  .listen(8080, () => {
    console.log("object as middleware");
  });
