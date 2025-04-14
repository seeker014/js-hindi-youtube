const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter); 
//   {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }


// console.log(Math.PI); // 3.1415926535
// Math.PI = 5    // value cannot be over-written
// console.log(Math.PI); // 3.1415926535

const chai = {
    name: 'ginger chai',
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(chai, "name")); 
//   {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }


Object.defineProperty(chai, 'name', {
    // writable: false,
    enumerable: true, // if we make enumerable false , then we cannot iterate on it.
})
//   {
//     value: 'ginger chai',
//     writable: false ,
//     enumerable: true ,
//     configurable: true
//   }

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {   // last wala function nhi print karwana
        
        console.log(`${key} : ${value}`);
    }
}
// name : ginger chai
// price : 250
// isAvailable : true