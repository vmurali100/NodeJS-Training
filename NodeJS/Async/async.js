function getDataFromServer(){
    return new Promise((resolve, reject)=>{
        let data = ["Ram","Ravi","Sam","Krishna"]
        resolve(data)
    })
}

async function getAllUsers (){
    
    let users = await getDataFromServer()
   
    users.forEach((user)=>{
        console.log(user)
    })
}


getAllUsers()