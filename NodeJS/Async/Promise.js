let users = []
function getDataFromServer(){
   return new Promise((resolve,reject)=>{
        let data = ["ABC","CDE","RAM","RAVI"]
        resolve(data)
        // reject("Some Issue with Data")
    })
}

getDataFromServer()
.then((res)=>{
    displayData(res)
})
.catch((err)=>{
    handleError(err)
})

function displayData(res){
    res.forEach((user)=>{
        console.log(user)
    })
}

function handleError(err){
    console.log(err)
}
// users = getDataFromServer()
// displayData()

