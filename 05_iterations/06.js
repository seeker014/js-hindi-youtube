// const coding=["js","cpp","java","python"]

// const values=coding.forEach(  (item)=>{
//     console.log(item);
//     return item     //forEach does not return any value
// })

// console.log(values); //undefined , since forEach does not return any value

const nums=[1,2,3,4,5,6,7,8,9,10]

// const newnums = nums.filter( (num)=>num>4 )   // filter returns values
// console.log(newnums); // [5,6,7,8,9,10]   

// const newnums=nums.filter( (num)=>{
//     return num>4    //if we open scope {} , we have to write return keyword
// })

// const newnums=[]

// nums.forEach( (num)=>{
//     if (num>4) {
//         newnums.push(num);
//     }
// })  //another way of writing it , all have same output

const books=[
    {
        title:"book 1" , genre:"fiction"
    },
    {
        title:"book 2" , genre:"history"
    },
    {
        title:"book 3" , genre:"history"
    }
]

const mybooks = books.filter( (bk)=> bk.genre==="history" && bk.title==="book 2" )

console.log(mybooks);
// [
//     { title: 'book 2', genre: 'history' }
// ]
