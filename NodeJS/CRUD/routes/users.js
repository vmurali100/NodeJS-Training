var express = require("express");
var router = express.Router();
var User = require("../models/user");

/* GET users listing. */
router.get("/", function (req, res, next) {
  User.find({},(err,data)=>{
    res.send({details:data});
  })
});

router.get("/:id",(req,res)=>{
  console.log(req.params.id)
  User.findOne({_id:req.params.id},(err,data)=>{
    res.send({details:data})

  })
})

router.post("/createUser", async (req, res, next) => {
  const user = new User(req.body);
 
  let response = await user.save();
  res.send({response})

  // Handling with Promise
  // user.save().then(() => {
  //   console.log("user Added Successfully");
  //   res.send({ details: "User Added Successfully" });
  // });
});

router.delete("/deleteUser/:id", (req, res) => {
  let id = req.params.id;
  User.deleteOne({ _id:id },()=>{
    console.log("User deleted Successfully");
    res.send({details:"User deleted Successfully"})
  });
});

router.put("/updateUser/:id",(req,res)=>{
  let id=req.params.id;
  User.updateOne({_id:id},req.body,()=>{
    res.send({details:"User updated Successfully"})
  })
})

module.exports = router;
