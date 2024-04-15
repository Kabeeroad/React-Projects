var express = require("express");
var router = express.Router();
const userModel = require("./users");
const local

router.get("/", function (req, res) {
  res.render("index");
});

router.get("/read", function (req, res) {
  console.log(req.cookies.age);
  res.send("check");
});
router.get("/delete", function (req, res) {
  res.clearCookie("age");
  res.send("cleare hogi");
});
module.exports = router;
