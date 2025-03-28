const user={
    username:"abhi",
    price:999,

    message:function() {
        console.log(`${this.username} , welcome to website`); //this refers to the current context
        console.log(this) 
    }

}

//user.message(); //abhi, welcome to website
//{ username: 'abhi', price: 999, message: [Function: message] }    - this refers to currently this
//user.username="sam" //current value of username was changed to sam
//user.message() //sam,welcome to website
//{ username: 'sam', price: 999, message: [Function: message] } 

console.log(this) // {} - there is nothing in context curently

// function chai(){
//     console.log(this) //prints many details
// }
// chai()

// function chai(){
//     let name="abhi"
//     console.log(this.name) //undefined (unable to use this in functions , only for objects)
// }
// chai()

const chai= ()=>{
    let name="abhi"
    console.log(this.name) //undefined (unable to use this in functions , only for objects)
    console.log(this) // {} - it signifies this can be used in arrow func as well
}
//chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// } //basic arrow function syntax , this is also explicit return func , since it uses return keyword

// const addtwo=(num1,num2)=> num1+num2 //implicit function syntax , assumes to return num1+num2

// const addtwo=(num1,num2)=> (num1+num2) //when use{} write return keyword , when use () , no need to write return

const addtwo=(num1,num2)=> ({username:"abhi"}) // to return object , compulsory to wrap in ()
