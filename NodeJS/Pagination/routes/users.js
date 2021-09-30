var express = require('express');
var router = express.Router();
let users = require('./users.json');
/* GET users listing. */
router.get('/', function(req, res, next) {
  const {page=1,limit=10} = req.query
  let allUsers = users.splice(page-1,limit)
  res.send({total:allUsers.length,allUsers});
});

module.exports = router;
