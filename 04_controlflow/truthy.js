// const email="abc"
// if (email) //any value in string is considered true , if empty string then condition false
// {
//     console.log("got email");
// }
// else {
//     console.log("no email")
// }

// falsy values -
// false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

//truthy values -
// "0" , 'false' , "space" ,[],{},function(){}  (any string that is not empty is true)

const email=[]
if (email.length===0) 
{
    console.log("empty array");
}

const myobject={}
if (Object.keys(myobject).length===0) { //Object.keys(object) makes array of object elements
    console.log("object is empty");
}

//Nullish coalescing operator (??):null undefined - used to remove null and undefined

let val1;
//val1=5??10
//console.log(val1); //5(first value)


// val1=null??10;
// console.log(val1); //10 (does not assign null)

// val1=undefined??15
// console.log(val1); //15

val1=null??15??20
console.log(val1); //15 (first value except null)

// Ternary  operator

const price = 100
price>=80 ? console.log("more than 80 rs"):console.log("less than 80"); //more than 80rs
