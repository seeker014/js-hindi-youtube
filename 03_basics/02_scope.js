// var c=300

// if (true)
// {
//     let a=10
//     const b=20
//     var c=30
// }


// console.log(a); //a is undefined (not in scope)
// console.log(b); //b is undefined
// console.log(c); //30 (var does not obey scope) , 300 is not printed
// hence usually we ignore var

let a=300
if (true){
    let a=10
    const b=20
    console.log(a); //10
}

console.log(a); //300

// global scope is different in console and here in node.


function one(){
    const name="abhi"
    function two(){
        const website="youtube"
        console.log(name); //abhi
    }
    console.log(website); //gives error
    two();
}
one();

if (true)
{
    const username="abhinav"
    if (username==="abhinav")
    {
        const web=" yt"
        console.log(username+web); //abhinav yt
    }
    //console.log(web); //error
}
//console.log(username); //error

// interesting concept

function addone(num){
    return num+1
}
addone(5) //we can write addone(5) before addone function also , gives same result

//here we cannot call addtwo(5) before addtwo function since it gets stored in variable
//cannot call it before declaration.
const addtwo=function(num){
    return num+2
}


