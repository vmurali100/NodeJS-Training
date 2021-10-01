const cp = require('child_process');
const path=require('path')

const names = ["Ram","Ravi","Sam","Sundar"]
var child = cp.fork('forkchild',names,{cwd:'./modules'})
child.on('message',(data)=>{
    console.log(data);
})

setTimeout(()=>{
    child.send({fname:"Murali",lname:"Krishna"})

},2000)
child.on('exit',()=>{
    console.log("Child termincated");
})
