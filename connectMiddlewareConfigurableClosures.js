const connect = require("connect");

const greetingGenerator = (message) => {
  return (req, res, next) => {
    res.end(message);
  };
};

const sayHelloThere = greetingGenerator("Hello There!");
const sayHiWassup = greetingGenerator("Hi Wassup?");
connect()
  .use("/hello", sayHelloThere)
  .use("/hi", sayHiWassup)
  // all requests will back to this URL if the end point doesn't match
  .use("/", (req, res, next) => {
    res.end("No greetings!");
  })
  .listen(8080, () => {
    console.log("listening to hello");
  });
