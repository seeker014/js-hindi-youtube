//array

//const myArr=[0,1,2,3,4,5,true,"abhinav"] //can store elements having diff data types

const arr=[0,1,2,3,4,5] //arrays can be resized  as well

//console.log(arr[0]); //0 (0 based indexing)

//shallow copy is a copy whose properties share same reference
//deep copy-properties do not share same reference

const myHeros=["superman","batman"]

const arr2= new Array(1,2,3,4) //values 1,2,3,4 are added in array - arr2
//console.log(arr2[2]); //3

// when you run in console(google), we get many properties and methods of arrays

// array methods

arr.push(6)
//console.log(arr); // [0,....,6]

arr.pop() //last value is popped

arr.unshift(9)
//console.log(arr); //adds 9 at start of array , shifts other elements right

arr.shift() //removes 1st element

// console.log(arr.includes(8)); //false

// console.log(arr.indexOf(9)); //-1 , since it not in array only

const newarr=arr.join() //adds all elements into a string seperated by comma
// console.log(arr); //[ 0, 1, 2, 3, 4, 5 ]
// console.log(newarr); //0,1,2,3,4,5

// console.log("A",arr); //A [ 0, 1, 2, 3, 4, 5 ]
// const n1=arr.slice(1,3) //1 is included , 3 is excluded , gives 1,2
// console.log(n1);

// console.log("B",arr);
// const n2=arr.splice(1,3) // 1,2,3
// console.log(n2);

// console.log("C",arr); //original array me se splice wala part hatt jata hai

const heros=["thor","ironman","spiderman"]
const dcheros=["superman","flash","batman"]

//heros.push(dcheros)

//console.log(heros); //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 3rd index pe array he aajata hai pura

//heros[3][1] -> flash

allheros=heros.concat(dcheros); //concat me result naya array me store krna parta hai
console.log(allheros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const newheros=[...heros, ...dcheros] //spread operator - takes individual elements and not whole array
console.log(newheros); //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const arr1=[1,2,3,[4,5,6],7,[6,7,[4,5]]]

const realarr=arr1.flat(2); //goes till 2 depths of arrays inside arrays
console.log(realarr); //prints all elements seperately in one array

console.log(Array.isArray("Abhinav")) //false
console.log(Array.from("Abhinav")) //[ 'A', 'b', 'h', 'i', 'n', 'a','v']

console.log(Array.from({name:"abhinav"})) // [] doesnt know array keys se banaye ya values

let a=100
let b=200
let c=300

console.log(Array.of(a,b,c)); // [100,200,300]






