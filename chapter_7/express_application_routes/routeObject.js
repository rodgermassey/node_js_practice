const express = require("express");

const app = express();
/* The sequence in which all the HTTP methods are registered is also very important
the request will pass through these methods in the order in which they are registered.
the sequence is (all=>get=>post=>delete=>put) */
app
  .route("/") // It returns an object with all, put, get, delete & post methods (listen method is not present in this object)
  .all((req, res, next) => {
    res.write("always running first \n");
    next();
  })
  .get((req, res, next) => {
    res.end("Inside get");
  })
  .post((req, res, next) => {
    res.end("Inside post");
  })
  .delete((req, res, next) => {
    res.end("Inside delete");
  })
  .put((req, res, next) => {
    res.end("Inside put");
  });
app.listen(8080);
