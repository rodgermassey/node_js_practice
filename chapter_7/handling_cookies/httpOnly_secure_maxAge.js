const cookieParser = require("cookie-parser");
const express = require("express");

express()
  .use(cookieParser())
  .use((req, res, next) => {
    if (req.cookies.foo) {
      res.end("cookie already set!");
    } else {
      res.cookie("foo", Math.random() * 10000, {
        maxAge: 5000,
        httpOnly: true, // we use this property so that our cookie becomes unaccesible from the Javascript.
      });
      res.end("This cookie will clear after 5 seconds");
    }
  })
  .listen(8080);
