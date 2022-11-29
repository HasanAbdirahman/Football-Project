var express = require("express");
var router = express.Router();

let playersCtrl = require("../controller/players");
let reviewsCtrl = require("../controller/reviews");

router.post("/reviews/:id/comments", reviewsCtrl.create);

module.exports = router;
