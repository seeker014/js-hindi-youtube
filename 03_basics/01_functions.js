function name() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
}
//name(); // A B H I gets printed on different lines

// function add(number1 ,number2){
//     console.log(number1+number2)
// }

// add(3,4) //7
// add(3,"4") //34

function add(number1 ,number2){
    let result = (number1+number2)
    return result // or return number1+number2
}

const result=add(3,5)
console.log(result); //8

// function message (username) {
//     return `${username} just logged in`
// }

//console.log(message("Abhinav")); //Abhinav just logged in
//console.log(message()); //undefined just  logged in

// function message (username) {
//     if (username===undefined) // or write -> if (!username)
//         {
//             console.log("please enter a valid name");
//             return
//         }   
//     return `${username} just logged in`
//     }

//console.log(message()); //please enter a valid name

function message (username="sam") {
    return `${username} just logged in`
    }
// if no username is passed , it prints - sam just logged in.

// function calculate (num1) {
//     return num1
// }
// console.log(calculate(200,400,600)); //200

function calculate (...num1) {  //... is rest operator , ... is also representation for spread operator.
    return num1
}
console.log(calculate(200,400,600)); // [200,400,600] - makes array of values

/*  if we write function calculate (val1,val2,...num1) , then num1 has - [600] , 200 and 400 goes to val1 and val2
*/

const user={
    username:"abhi",
    price:199
}

function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleobject(user); // Username is abhi and price is 199

//if we pass- price is ${anyobject.amount} - it gives: price is undefined.

handleobject({
    username:"sam",
    price:399
}) //can make object while passing

//arrays can be passed as well
const arr=[200,400,100,600]

function return2ndvalue(getArray){
    return getArray[1];
}

//console.log(return2ndvalue(arr)); //400
//console.log(return2ndvalue([200,400,100,600])) can pass like this also
