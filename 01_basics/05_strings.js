const name="abhinav"
const cnt=50
console.log(name+cnt+" value"); //abhinav50 value

console.log(`Hello my name is ${name} and my count is ${cnt}`); //Hello my name is abhinav and my count is 50

const gameName=new String('abhi-fc') //also declaration of string

//String {'abhi'}0: "a"  1: "b"  2: "h"  3: "i"length: 4[[Prototype]]: String[[PrimitiveValue]]: "abhi" // o/p in console

console.log(gameName[0]); //a
console.log(gameName.__proto__); // {} - objects , can be seen in detail in console

console.log(gameName.length); //4
console.log(gameName.toUpperCase()); //ABHI , but original string is still small (copy)

console.log(gameName.charAt(2)); // h is at 2nd position

console.log(gameName.indexOf('i')); //3

const newstring=gameName.substring(0,4)
console.log(newstring); //abhi - 4th index is not included and 0th is included
//(-2,4) treated as (0,4) and (0,-2) gives empty string

const s2=gameName.slice(-5,4) //starts from 5th letter from end(1based indexing from end) and goes till 3rd letter from start 
//since 4th index has to be excluded
console.log(s2);

const s1="   abhinav  "
console.log(s1.trim()); //abhinav - removes spaces front and back

const url="abhi.co%20m"
console.log(url.replace('%20','-')) //makes it- abhi.c-om

console.log(url.includes('abhi')) //true ,if not present - false

console.log(gameName.split('-')); // ['abhi' , 'fc'] splits on basis of - present in string




