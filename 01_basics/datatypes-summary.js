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





