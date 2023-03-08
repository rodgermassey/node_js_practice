const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

//The below line will throw an error as the router object doesn't have the listen method.
// router.listen(8080, () => {
//   console.log("the server is running");
// });
