// ES6

class User {   // no need to make object and function now
    constructor(username, email, password){    // constructor gets called as soon as 'new' keyword is used
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const chai = new User("chai", "chai@gmail.com", "123")

console.log(chai.encryptPassword()); // 123abc
console.log(chai.changeUsername()); // CHAI

// behind the scene , without class doing the same job as we have learnt

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword()); // 123abc
console.log(tea.changeUsername()); // TEA