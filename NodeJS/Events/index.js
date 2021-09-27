var events = require('events')
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent',(msg)=>{
    console.log(msg)
})

myEmitter.emit('someEvent','Hello from Event Emitter')