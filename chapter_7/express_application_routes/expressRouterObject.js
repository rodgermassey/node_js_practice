const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();
let items = [];
//The below line will throw an error as the router object doesn't have the listen method.
// router.listen(8080, () => {
//   console.log("the server is running");
// });

router.use(bodyParser());
router
  .route("/")
  .get((req, res, next) => {
    res.send({
      status: "items found",
      items: items,
    });
  })
  .post((req, res, next) => {
    items.push(req.body);
    res.send({
      status: "item inserted",
      itemId: items.length - 1,
      items: items,
    });
  })
  .put((req, res, next) => {
    items = req.body;
    res.send({
      status: "items replaced!",
      items: items,
    });
  })
  .delete((req, res, next) => {
    items = [];
    res.send({
      status: "items cleared!",
      items: items,
    });
  });

router
  .route("/:id")
  .get((req, res, next) => {
    let id = req.params["id"];
    if (id && items[Number(id)]) {
      res.send({
        status: "item found",
        item: items[Number(id)],
      });
    } else {
      res.send(404, { status: "item not found" });
    }
  })
  .all((req, res, next) => {
    res.send(500, {
      status: "not implemented",
    });
  });

express().use("/todo", router).listen(8080);
