var express = require("express");
var router = express.Router();
var User = require("../models/user");
var validation = require('./validation')
/* GET users listing. */
router.get("/",validation, async function (req, res, next) {
  
  res.send({info:"Some users Information "});
});

module.exports = router;
