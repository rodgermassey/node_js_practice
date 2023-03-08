const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  //run when nothing is passed after http://127.0.0.1:8080
  res.send("nothing passed in!");
});

app.get(/^\/[0-9]+$/, (req, res, next) => {
  //run when only numeric value is passed e.g. http://127.0.0.1:8080/123
  res.send("number!");
});

app
  .get("/*", (req, res, next) => {
    //run when anything except (only numeric value) is passed after endpoint e.g. http://127.0.0.1:8080/abc123
    res.send("not a number!");
  })
  //Even though listen is attached to the last app.get() but it will intercept all the requests made to the other 2 middlewares as-well
  .listen(8080);
