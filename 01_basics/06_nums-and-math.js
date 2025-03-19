const score=400
console.log(score); //400

const bal=new Number(400)
console.log(bal); // [Number:400]

console.log(bal.toString().length); //400 in string now , length is 3

console.log(bal.length); // now showing undefined

console.log(bal.toFixed(2)); //400.00

const num=23.8966
console.log(num.toPrecision(3)); //returns ans in string form -   23.9
// if num=123.8966 , we get ans-124 (3 digits)
//1123.8966 , ans-  1.12e+3

const hundreds=1000000
console.log(hundreds.toLocaleString()); // 1,000,000 (english system)
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 (indian system)

//Number.MAX_VALUE -> gives max limit of Number data type in console , many other functions


//Maths:

console.log(Math); //Object [Math] {} 

//in console , we get many values and functions

console.log(Math.abs(-4)); //4
console.log(Math.round(4.3)); //4 , 4.6->5 ,4.5->5
console.log(Math.ceil(4.2)); //5 , floor lower value deta hai

console.log(Math.min(4,3,5,1)); //1 , same with max

console.log(Math.random()); //0.52 - any value bw 0 and 1

console.log(Math.floor(Math.random()*10)+1); //to get a number bw 1 to 10

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);// gives numbers bw min and max






