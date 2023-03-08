const express = require("express");
const http = require("http");

const app = express().use((req, res, next) => {
  res.end("Hi you have reached the express' dispatcher's  middleware function");
});

http.createServer(app).listen(8080);
