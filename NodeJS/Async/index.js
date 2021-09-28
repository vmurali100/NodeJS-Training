let users
console.log("Excution line no 1");
// setTimeout(function (){})


// Server Communication 
function getDataFromServer(showUsers){
    setTimeout(()=>{
        console.log("Execution Line no 2")
        users = ["Murali","krishna"]
        showUsers()
    })
}

function showUsers(){
    console.log("users details",users);
}



getDataFromServer(showUsers)