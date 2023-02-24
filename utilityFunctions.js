const send404 = (response) => {
  response.writeHead(404, { "content-type": "text/plain" });
  response.write("ERROR 404: Resource could not be located");
  response.end();
};

const mimeLookup = {
  ".js": "application/javascript",
  ".html": "text/html",
};

const jsonParsingFunction = (req, res, next) => {
  let requestData = "";
  if (req.headers["content-type"] === "application/json") {
    console.log("hello Im running");
    req.on("readable", () => {
      requestData += req.read();
    });
    req.on("end", () => {
      req.body = JSON.parse(requestData);
      next();
    });
  } else {
    console.log("hello Im running1");
    res.write(
      "no JSON detected simply passing the control to the next connect middleware"
    );
    next();
  }
};

const send401 = (res) => {
  res.writeHead(401, { "WWW-Authenticate": "basic" });
  res.end();
};

const auth = (req, res, next) => {
  if (!req.headers.authorization) {
    send401(res);
    return;
  }
  let auth = new Buffer(req.headers.authorization.split(" ")[1], "base64")
    .toString()
    .split(":");
  let username = auth[0];
  let password = auth[1];
  if (username === "fo0" && password == "bar") {
    next();
  } else {
    send401(res);
  }
};

module.exports = { send404, mimeLookup, jsonParsingFunction, send401, auth };
