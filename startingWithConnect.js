const connect = require("connect");
const http = require("http");

const app = connect();

/****connect() method returns a dispatcher (a function that takes request and response objects as arguments ) */
/**********Using connect as callback function to http's createServer method as it takes request & response arguments */
const server = http.createServer(app);
server.listen(8080, () => {
  console.log("this server is running at: 8080");
});

/** app which is returned from connect() method is just a dispatcher function. */
/** this function has listen() member method which creates an http server internally
 * and calls listen() method of http on it with app as the callback to http.createServer()
 * therefore
 * app.listen(8080) === http.createServer(app).listen(8080)
 * the above 2 lines are equivalent as listen() member method of app also creates an http server internally
 */
app.listen(8081, () => {
  console.log("running at 8081");
});
