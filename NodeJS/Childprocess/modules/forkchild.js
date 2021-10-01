var data = process.argv.slice(2);

function sayHello(names){
    names.forEach((name)=>{
        process.send(`Greetins ${name}`)
    })
}
sayHello(data)

process.on('message',(userData)=>{
    console.log(userData);
})