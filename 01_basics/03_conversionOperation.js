let score=33

console.log(typeof score); // number is printed
console.log(typeof(score)); // number is printed

let score="33"
let valueInNumber = Number(score) //converting string to number
console.log(typeof valueInNumber);

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

Operations :

let value=3
let negvalue=-value;
console.log(negvalue); //-3 gets printed

/* 
console.log(2+2); 4
console.log(2-2); 0
console.log(2*2); 4
console.log(2**3); 2^3=8
console.log(2/3); 0.6666
console.log(2%3); 2
*/

let str1="hello"
let str2=" abhi"

let str3=str1+str2 //hello abhi is in str3
console.log("1"+2+2); //122 is printed
console.log(1+2+"2"); //32 is output , so don't rely on such operations
console.log("2"+3+2+"1"); //2321
console.log(2+3+"4"+2+1); //5421 whenever string starts then just concatenation

console.log(+true); // gives 1
//true+ gives error
console.log(+"") // gives 0

let num1,num2,num3
num1=num2=num3=2+2 // all have 4 but this approach is not preferred
console.table([num1,num2,num3]);


let gamecounter=100
++gamecounter; //++a and a++ increment before use and use before increment 