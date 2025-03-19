// primitive data types(call by value): 7 types 
// String , Number, Boolean, null, undefined, Symbol,BigInt
 
// reference data types or non-primitive data types (call by reference)
//array , objects , functions

// js is dynamically typed language , const score=2 , const score="two" , understands data types itself

// const score = 100.3 , this is also number , here no float double

const id=Symbol('123')
const id2=Symbol('123')

console.log(id===id2); //false , even if they have the same description , they are unique 

const bignumber = 3456227283n; //this n makes the number a BigInt

//Reference data types:
//Arrays , objects , functions

const heros=["batman","superman","spiderman"]; //array
let myObj = {
    name:"abbhoinav",
    age:21,
} // inside {} all are objects , can be string , number,array,another object

const myFunction=function(){
    console.log("Hello");
} //function

console.log(typeof bignumber); //bigint

console.log(typeof myFunction); //function

console.log(typeof null); //object

//https://262.ecma-international.org/5.1/#sec-11.4.3 

//Memory allocation:

// Stack (primitive data types), Heap (reference data types)

let name="abhinav"

let anothername=name
anothername=chiksy

console.log(name); //abhinav
console.log(anothername); //chiksy , since copy is changed , not the original name

let user1={
    email:"user@google.com",
    upi:"user@ybl",
}

let user2 = user1 

user2.email = "hello@google.com" // .email is used to access members of objects
// Now user1 email is also changed since it was passed by reference

console.log(user1.email); //hello@google.com
console.log(user2.email); //hello@google.com

// so stack always gives a copy of primitive data types and heap gives reference of non-primitive data types.



