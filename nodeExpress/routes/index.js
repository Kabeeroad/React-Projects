var express = require("express");
const session = require("express-session");
var router = express.Router();
// const userModel = require("./users");

router.get("/", function (req, res) {
  req.session.ban = true;

  res.render("index");
});

router.get("/ban", function (req, res) {
  if (req.session.ban === true) {
    res.send("your bande");
  } else {
    res.send("not band");
  }
});

router.get("/remove", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw err;
    res.send("ban removed");
  });
});
module.exports = router;
