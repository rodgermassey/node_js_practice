const express = require("express");
const serveIndex = require("serve-index");
const serveStatic = require("serve-static");

/* In case that the serve-static middleware is unable to resolve path it will then move onto the serve-index middleware
    which will show use the entire directory present at the specified path and we could search on the files present in that directory */
express()
  .use(serveStatic(__dirname + "/public"))
  .use(serveIndex(__dirname + "/public"))
  .listen(8080);
