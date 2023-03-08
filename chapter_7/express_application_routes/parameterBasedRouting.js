const express = require("express");

const app = express();

app.param("userId", (req, res, next, userId) => {
  res.write("Getting info for userId : " + userId + "\n");
  req.user = { userId: userId };
  next();
});

app
  .get("/:user/:userId", (req, res, next) => {
    /*  Not using res.send in this middleware as the server will throw error 
    (Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client)
    as we have already set the headers in the app.param() method when writing the response to the client.*/
    res.end(
      "user id : " + req.user.userId + "\nuser name : " + req.params["user"]
    );
  })
  .listen(8080);
