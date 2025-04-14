function SetUsername(username){
    
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    
    // .call is used to hold the reference of the variable by passing the current execution context to the called function ,
    // 'this' is sent along as a parameter so that all reference is stored in the current execution context of the function that is calling
    SetUsername.call(this, username)  // if we do - SetUsername (username) , then function gets called but after that 
    //  the execution context gets deleted and all variables declared under it are gone
   
    this.email = email 
    this.password = password 
}

const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai); // createUser { username: 'chai', email: 'chai@fb.com', password: '123' }