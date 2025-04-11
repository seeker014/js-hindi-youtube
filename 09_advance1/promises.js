// promise is an object representing eventual completion or failure of an asynchronous operation

const promiseOne = new Promise(function(resolve, reject){   // either resolve or reject
    // Do an async task - DB calls, cryptography, network calls
    setTimeout(function(){
        console.log('Async task is compelete'); // .then is connected to resolve
        resolve()  // this method connects to .then
    }, 1000)
})

promiseOne.then(function(){             // consume promise
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000) 

}).then(function(){        //here we created promise directly and did .then at the same time
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){ 
    setTimeout(function(){ 
        resolve({username: "Chai", email: "chai@example.com"}) 
    }, 1000)
})

promiseThree.then(function(user){   // user is the passed object
    console.log(user);  // { username: 'Chai', email: 'chai@example.com' }
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
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
    return user.username    //chaining of .then , .catch , .finally
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))


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
    try {                                   // try catch block is used for detecting errors (reject case)
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()

// async function getAllUsers(){            //async function means a response will be there
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// in output screen , data of API is printed first and then remaining code is executed and printed.


// promise.all
// yes this is also available, kuch reading aap b kro.