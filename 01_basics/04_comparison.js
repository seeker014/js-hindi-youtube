console.log(2>1); //ans comes in true or false
console.log(2<1);
console.log(2==1);
console.log(2!=1);

console.log("2">1); //true
console.log("02">1); //true

//always try to compare two same data types

console.log(null>0); //false
console.log(null==0); //false , comparison operators change null to a number and give result but equality check"==" is different
console.log(null>=0); //true

console.log(undefined==0); //false
console.log(undefined>0); //false
console.log(undefined<0); //false

// === strict check - checks values and data types
console.log("2"===2); //false since data types are different







