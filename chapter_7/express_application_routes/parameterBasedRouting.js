const express = require("express");
/* FOR THIS TO WORK YOU NEED TO FIRST REGISTER THE ROUTE USING EITHER 
   app.(HTTP VERB) (I.E. get, put, post, delete) or register the route using app.use()
*/
/* In this server the order doesn't matter the app.param() method will always be called first */
const app = express();
app.get("/:user/:userId", (req, res, next) => {
  /*  Not using res.send in this middleware as the server will throw error 
    (Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client)
    as we have already set the headers in the app.param() method when writing the response to the client.*/
  res.end(
    "user id : " + req.user.userId + "\nuser name : " + req.params["user"]
  );
});

app.param("userId", (req, res, next, userId) => {
  res.write("Getting info for userId : " + userId + "\n");
  req.user = { userId: userId };
  next();
});

app.listen(8080);
