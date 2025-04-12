// promise is an 'object' representing eventual completion or failure of an asynchronous operation

// Making a new promise   

const promiseOne = new Promise(function(resolve, reject){  // 2 possibilities - either resolve or reject
    // Do an async task - DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()  // this method connects resolve to .then
    }, 1000)
})

promiseOne.then(function(){          // .then is connected to resolve   // after creating promise , consume promise
    console.log("Promise consumed"); // Async task is complete \n Promise consumed
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000) 
}).then(function(){        //here we created promise directly and did .then (consumed promise) at the same time
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){ 
    setTimeout(function(){ 
        resolve({username: "Chai", email: "chai@example.com"})  //can pass data (usually object) in resolve
    }, 1000)
})

promiseThree.then(function(user){   // user is the passed object
    console.log(user);  // { username: 'Chai', email: 'chai@example.com' }
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true  // true means error is there
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong') 
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username    // can do chaining of .then , .catch , .finally
}).then((username) => {
    console.log(username);  // if error=false , resolve returns user , and another .then gives username (hitesh)
}).catch(function(error){     // whatever is returned in reject block is given in error using .catch 
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  // like default case , always gets executed


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

async function consumePromiseFive(){        // another way of acccepting promise
    try {                         //if error=false , try block is used for consuming promise (resolve case)            
        const response = await promiseFive
        console.log(response);   // {username: "javascript", password: "123"}
    } catch (error) {             // if error=true , catch block is used for detecting errors (reject case)
        console.log(error);  // ERROR: JS went wrong
    }
}

consumePromiseFive()

// so we can use .then() , .catch()    OR    async await using try and catch block

// async function getAllUsers(){        //async function means a response will be there
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

// writing same function using .then and .catch
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// in output screen , data of API is printed first and then remaining code is executed and printed 
// (this happens because fetch returns a promise and has high priority (priority queue) micro task queue)

// promise.all
// yes this is also available, kuch reading aap b kro.