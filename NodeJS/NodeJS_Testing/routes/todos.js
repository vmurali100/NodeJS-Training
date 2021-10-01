var express = require("express");
var router = express.Router();
const createError = require("http-errors");

const todos = [
  { id: 1, name: "NEXT framework TO be Prepared", completed: false },
  { id: 2, name: "NEXT framework TO be Prepared", completed: false },
];
// router.get("/", function (req, res, next) {
//   res.json({ todos });
// });
// router.get('/:id', function(req, res, next) {
//     let todo = todos.find(todo=>todo.id == Number(req.params.id))
//     if(!todo) return next(createError(404,'Not Found'))
//     res.json({todo});
// });

module.exports = router;
