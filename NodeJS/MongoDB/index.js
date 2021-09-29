const mongoose = require('mongoose');
const Post = require('./models/Post')

// let mongodbUri="mongodb://localhost/sampleusers"
let mongodbUri="mongodb+srv://murali:murali@cluster0.j38lu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// mongoose.connect("mongodb://localhost/sampleusers")
// mongoose.connect("mongodb+srv://murali:murali@cluster0.bhpng.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")

mongoose.connect(mongodbUri,()=>{
    console.log("Connected to DB")
    let post = new Post({
        title:"Post 32",
        description:"Some Description About Post 32 added for demo Purpose. And details will be going add soon"
    })

    post.save().then(res=>{
        console.log("Document Added Successfully")
    })
    // Post.findById('6153ed7d5000a93dae03076b',(err,data)=>{
    //     console.log(err)
    //     console.log(data)
    // })
})