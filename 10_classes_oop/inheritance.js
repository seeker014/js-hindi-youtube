class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)   // now no need to use call function and pass 'this' as an argument 
        // just use 'super' keyword and we can have username of parent class
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher.com", "123") // Teacher has access of both logMe and addCourse

chai.addCourse() // A new course was added by chai
const masalaChai = new User("masalaChai") // now User does not have access of addCourse , it has logMe

masalaChai.logMe() // USERNAME is masalaChai

onsole.log(chai instanceof Teacher); // true (chai is made from Teacher)
console.log(chai instanceof User); // true (signifies chai is instance of Teacher which is instance of User )