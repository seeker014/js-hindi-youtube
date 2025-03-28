const nums=[1,2,3,4,5,6,7,8,9,10]

// const newnums=nums.map( (num)=> num+10)
// console.log(newnums); 
//   [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19, 20
//   ]

const newnums=nums.map((num)=>num*10).map((num)=>num+1).filter((num)=> num>40)  //chaining of functions, num*10 is passed in 2nd map ,then +1 ,then filter
console.log(newnums);   // [41,...,101]
