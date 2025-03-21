// singleton-constructor se singleton banta hai

//object literals

//Object.create - constructor method
const sym=Symbol("key1")

const user={
    name:"abhinav",
    "fullname":"abhinav raj", //agar aise key define krenge toh dot se access nhi hoga- use[]
    sym:"mykey",
    age:18,
    location: "Jsr",
    email:"abhi@123.com",
    lastLoginDays:["Mon","Sat"]
}
console.log(user.email); //abhi@123.com , accessing objects
console.log(user["email"]); //abhi@123.com , another way to access

console.log(user.sym); //mykey , but datatype is string
//to use as symbol -> [sym] (syntax) , accessed as - user[sym] (IMP)

user.email="ruff@123.inc" //can overwrite like this

//Object.freeze(user) //after this overwriting wont change the values

//greeting is a function in object-user
user.greeting=function(){
    console.log("hello");
}

console.log(user.greeting); //function(anonymous) - function not executed,only reference of function is received
console.log(user.greeting()); //hello

user.greet=function(){
    console.log(`hello,${this.name}`); 
}
console.log(user.greet()); //hello, abhinav









