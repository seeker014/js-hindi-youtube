// let myName = "hitesh     "  length 11 hojata hai , 5 spaces included , we try to return true length without trim function
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function(){     // creating hitesh naam ka function for all objects , hence goes to all strings and arrays (inheritance).
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){  // this is made for only arrays , not all objects.
    console.log(`Hitesh says hello`);
}

// heroPower.hitesh()
// myHeros.hitesh()
// myHeros.heyHitesh()
// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport    // __proto__ is a function that helps TASupport to borrow properties from TeachingSupport
}

Teacher.__proto__ = User // can link like this also

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


// Hence we can make a method named trueLength that trims spaces

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`); // here this refers to ChaiAurCode when called from anotherUsername
    console.log(`True length is: ${this.trim().length}`); // True length is 11 (of chaiandcode)
}

anotherUsername.trueLength()  
"hitesh".trueLength() // this refers to "hitesh"
"iceTea".trueLength() // this refers to "iceTea"