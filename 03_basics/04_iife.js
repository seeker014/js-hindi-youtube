// Immediately invoked function Expressions (IIFE) - used to remove pollution from global scope problems

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

//()() - first paranthesis is definition , 2nd one is execution call

(function chai(){
    //named iife (here name is chai)
    console.log(`DB connected`); //DB connected (immediate func is executed)
}) (); //when writing two iife , remember to put ; at end of every iife

(  (name)=>{ //unnamed iife
    console.log(`hello ${name}`); //hello abhi
}) ('abhi') 





