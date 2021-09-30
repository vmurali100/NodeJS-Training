var express = require("express");
var router = express.Router();
var User = require("../models/user");
const bcrypt = require('bcryptjs');
var Joi = require('@hapi/joi');
var jwt = require('jsonwebtoken')

var schema = Joi.object({
    fname:Joi.string().min(6).required(),
    lname:Joi.string().min(6).required(),
    password:Joi.string().min(6).required(),
    email:Joi.string().email().required()

})
/* GET users listing. */
router.post("/register", async function (req, res, next) {

   const {error}= schema.validate(req.body)
   if (error) {
    res.status(400).send(error.details[0].message);
   }else{
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password,salt)
    
    let user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email:req.body.email,
        password: hashedPassword,
      });
      try {
        const emailExist = await User.findOne({email:req.body.email})
        if(emailExist) return res.status(400).send("Email Already Exist")
       const saveduser = await user.save();
        res.send(saveduser)
      } catch (err) {
        res.status(400).send(err);
      }
   }

});

router.post('/login',async (req,res,next)=>{
    const checkuser = await User.findOne({email:req.body.email})
    if(!checkuser) res.status(400).send("User Doesnt Exist")

    const validPass = await bcrypt.compare(req.body.password,checkuser.password)

    if(!validPass) res.status(400).send("Password is not valid")

    const token = jwt.sign({_id:checkuser._id},process.env.TOKEN_SECRET)
    res.header('auth-token',token).send({token})
    
})

module.exports = router;
