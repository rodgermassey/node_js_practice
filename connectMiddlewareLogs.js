const connect = require("connect");
const util = require("util");

const logit = (request, response, next) => {
  util.log(
    util.format(
      "Request recieved from %s and method is %s",
      request.url,
      request.method
    )
  );
  next();
};

const app = connect();
app.use(logit).listen(8080, () => {
  console.log("server running");
});
