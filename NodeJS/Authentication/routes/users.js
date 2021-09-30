var express = require("express");
var router = express.Router();
var validation = require('./validation')
var allUsers = require('./usersDetails.json')
/* GET users listing. */
router.get("/",validation, async function (req, res, next) {
  res.send({info:"Some users Conidentin  Information ",users:allUsers});
});

module.exports = router;
