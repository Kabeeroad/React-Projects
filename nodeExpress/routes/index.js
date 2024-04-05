var express = require("express");
const session = require("express-session");
var router = express.Router();
// const userModel = require("./users");

router.get("/", function (req, res) {
  req.session.ban = true;

  res.render("index");
});

module.exports = router;
