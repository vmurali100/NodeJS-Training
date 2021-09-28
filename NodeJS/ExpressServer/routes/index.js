var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'New Express Applicaion' });
  res.send({data:"welcome to Node Js Express Server"})
});

module.exports = router;
