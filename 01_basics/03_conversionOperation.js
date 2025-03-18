// let score=33

// console.log(typeof score); // number is printed
// console.log(typeof(score)); // number is printed

// let score="33"
// let valueInNumber = Number(score) //converting string to number
// console.log(typeof valueInNumber);

let score="33abc"
let valueInNumber = Number(score) //converting string to number
console.log(typeof valueInNumber); //prints 33abc also as a number
console.log(valueInNumber); //prints NaN (not a number)
// if score=null , then its converted to 0
// if score=undefined,it gives NaN , if score=true then gives 1 , score=false gives 0
 
let buffer=1;
let booleanBuffer=Boolean(buffer) //to convert to boolean
console.log(booleanBuffer); //true is printed, 0 is converted to false
/* empty strings give false , any random string gives true*/

let no=33
let stringNo=String(no) // converted to string
console.log(stringNo); 
console.log(typeof stringNo); //gives string as output



