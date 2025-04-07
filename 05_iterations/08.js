const nums=[1,2,3]

// const total=nums.reduce(function(acc,currval) {    // acc-accumulator
//     console.log(`acc:${acc} and currval:${currval}`);   // acc:0 and currval:1
//                                                         // acc:1 and currval:2
//                                                         // acc:3 and currval:3
//     return acc+currval //value return hoke acc me store hota hai
// } , 0) //0 is initial val of acc

//console.log(total); //6

const total=nums.reduce ( (acc,curr)=> acc+curr , 0)
console.log(total); //6

const cart=[
    {
        item:"js", price:2999
    },
    {
        item:"python", price:999
    },
    {
        item:"mobile dev", price:5999
    },
    {
        item:"data science", price:12999
    }
]

const amount=cart.reduce((acc,item)=> acc+item.price , 0)    // item denotes objects inside array
console.log(amount); //22996