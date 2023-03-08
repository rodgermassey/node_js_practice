const cookieParser = require("cookie-parser");
const express = require("express");

express()
  .use(cookieParser("use this string as key to sign the cookie"))
  .use("/toggle", (req, res, next) => {
    if (req.signedCookies.foo) {
      res.clearCookie("foo");
      res.end("named cookie was cleared" + req.signedCookies.foo);
    } else {
      res.cookie("foo", Math.random() * 100, { signed: true });
      res.end("foo cookie set");
    }
  })
  .listen(8080);
