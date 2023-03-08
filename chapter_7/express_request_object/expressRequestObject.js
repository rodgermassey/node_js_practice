const express = require("express");

/*A route will match any path that follows its path immediately with a “/”. For example: app.use('/apple', ...) will match “/apple”, “/apple/images”, “/apple/images/news”, and so on.

Since path defaults to “/”, middleware mounted without a path will be executed for every request to the app.
For example, this middleware function will be executed for every request to the app:

app.use(function (req, res, next) {
  console.log('Time: %d', Date.now())
  next()
}) */

express()
  // will not work for (/users)
  .use("/users/test", (req, res, next) => {
    res.write(req.path);
    console.log(req.path);
    res.write(req.url);
    console.log(req.url);
    res.write(req.ip);
    console.log(req.ip);
    res.end(req.query.name);
    console.log(req.query.name);
    // console.log(req.res, res.req);
  })
  .listen(8080);
