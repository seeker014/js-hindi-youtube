const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);  // this.username refers to user.username because getUserDetails()
        // is being called inside the person object.
        console.log(this); // prints entire object 'user'
    }

}

// console.log(user.username)
// console.log(user.getUserDetails()); // have to run the function
// console.log(this);  {} (empty paranthesis)

function User(username, loginCount, isLoggedIn){
    this.username = username; // rhs is the passed parameter
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this // object  is passed on , even if we dont do 'return this' , it is same (returns by default , implicitly defined)
}

// const userOne = User("hitesh", 12, true)
// const userTwo = User("ChaiAurCode", 11, false) // userOne ke values bhi yahi hojaate hai (over-written)

// Hence we use new keyword. Constructor function always gives a new context.
const userOne = new User("hitesh", 12, true) // new keyword is used in constructor function 
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor); // [Function : User] (has reference about itself only)
//console.log(userTwo);  // all values of userTwo get printed including username: "ChaiAurCode", loginCount: 11, isLoggedIn:false

// New keyword :
// step 1 - new object is created
// step 2 - constructor function is called
// step 3 - all arguments are injected in this keyword
// step 4 - we can have them inside function 
