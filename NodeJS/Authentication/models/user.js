var mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    }
})

module.exports=mongoose.model('AuthUsers',UserSchema)