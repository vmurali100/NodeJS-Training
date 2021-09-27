const { spawn } = require("child_process");

const child = spawn('find',['/'])

child.stdout.on('data',(data)=>{
    // To convert data in to string
    console.log(data.toString())
})