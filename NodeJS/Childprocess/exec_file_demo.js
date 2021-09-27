const { execFile } = require("child_process");

execFile('./somefile.exe',(error,stdout,stderr)=>{
    if(error){
        console.log(`Error : ${error.message}`)
        return
    }
    if(stderr){
        console.log(`Error : ${stderr }`)
        return 
    }

    console.log(`Stdout : ${stdout}`)
})