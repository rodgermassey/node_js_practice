const connect = require("connect");

connect()
  .use((req, res, next) => {
    res.write("welcome to first middleware!");
    next();
  })
  .use((req, res, next) => {
    res.write("2nd middleware error will be thrown here");
    /* We can use a normal string or an error object here! 
    If error middleware is missing then this error will be logged to the server console*/
    next(new Error("Hi I am the string error"));
  })
  /* 1) This is the error handling middleware if any middleware prior to this throws an error it will be handled
     by this error handling middleware.
     2) If this middleware is missing then the server will simply log the error or string that was passed as
     argument to the next() method.  */
  .use((err, req, res, next) => {
    console.log(err.message);
    console.log("Stacktrace:", err.stack);
    res.writeHead(500);
    res.end("An error has occured!");
    next();
  })
  .listen(8080, () => {
    console.log("the server is running at 8080");
  });
