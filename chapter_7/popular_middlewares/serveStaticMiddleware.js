const express = require("express");
const serveStatic = require("serve-static");

const app = express();

app.use(serveStatic(__dirname + "/public")).listen(8080);

/* We can also specify a list of files to be treated as index files */
/* serveStatic(__dirname+'/public', {'index':['default.html','default.htm']}) */
/* We can also use express framework directly to call servestatic as it is also a part of express ecosystem*/
/* express.static(__dirname+'/public') */
