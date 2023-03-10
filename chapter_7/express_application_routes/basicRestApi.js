const express = require("express");

const app = express();

/* The sequence in which all the HTTP methods are registered is also very important
the request will pass through these methods in the order in which they are registered.
the sequence is (all=>get=>post=>delete=>put) */

app.all("/", (req, res, next) => {
  res.write("always running first \n");
  next();
});
app.get("/", (req, res, next) => {
  res.end("Inside get");
});
app.post("/", (req, res, next) => {
  res.end("Inside post");
});
app.delete("/", (req, res, next) => {
  res.end("Inside delete");
});
app.put("/", (req, res, next) => {
  res.end("Inside put");
});
app.listen(8080);
