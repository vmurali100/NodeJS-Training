var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send({data:users});
});

router.post('/createUser',(req,res,next)=>{
  console.log(req.body)
  users.push(req.body)
  res.send({data:users})
})
router.delete('/deleteUser/:id',(req,res,next)=>{
  console.log(req.params.id)
  let newUsers = users.filter((user)=>req.params.id != user.id)
  users = newUsers
  res.send({data:newUsers})
 
})
router.put('/updateUser/:id',(req,res,next)=>{
  console.log(req.params.id)

  console.log(req.body)
  users.forEach((user)=>{
    console.log(user.id == req.params.id)
    if(user.id == req.params.id){
      user=req.body
    }
  })

  res.send({data:users})
})

module.exports = router;


let users = [
  {
      "fname": "Marisela",
      "lname": "Kavanaugh",
      "id":1
  },
  {
      "fname": "Trang",
      "lname": "Tuggle",
      "id":2
  },
  {
      "fname": "Jessica",
      "lname": "Haag",
      "id":3
  },
  {
      "fname": "Ewa",
      "lname": "Woode",
      "id":4
  }
]
