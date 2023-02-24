const connect = require("connect");

const app = connect();
app
  .use((req, res, next) => {
    next();
  })
  .listen(8080, () => {
    console.log("the server is running on 8080");
  });
