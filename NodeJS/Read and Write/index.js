var fs = require('fs');

// var users = fs.readFileSync('users.json','utf-8')

// fs.writeFileSync('./newdata.json',users)

// console.log(users)

//Handling with Async, so it wont block the Code 

fs.readFile('users.json','utf-8',(err,data)=>{
    console.log(data)
    fs.writeFile('newSomeUsers.json',data,()=>{
        console.log("File Wrote")
    })
})

