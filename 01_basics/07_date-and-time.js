// see mdn article
// let mydate=new Date()
// console.log(mydate); //weird looking date comes

// console.log(mydate.toString()); // Wed Mar 19 2025 17:21:44 GMT+0000 (Coordinated Universal Time)
// console.log(mydate.toDateString()); //Wed Mar 19 2025
// console.log(mydate.toLocaleString()); //3/19/2025 , 5:27:43 PM
// console.log(typeof mydate); //object

// let myowndate=new Date (2023,0,23)
// console.log(myowndate.toString()); //Mon Jan 23 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
//months start from 0 in JS

// let myowndate=new Date (2023,0,23,5,3)
// console.log(myowndate.toLocaleString()); // 1/23/2023, 5:03:00 AM

// let myowndate=new Date ("2023-01-21")
// console.log(myowndate.toLocaleString()); // 1/21/2023, 12:00:00 AM

// let myowndate=new Date ("03-19-2025")
// console.log(myowndate.toLocaleString()); // 3/19/2025, 12:00:00 AM , indian standard -MM/DD/YYYY

//let mytime=Date.now()
// console.log(mytime); // 1742407551108 (time in milliseconds from 1st Jan , 1970)

// console.log(myowndate.getTime()); // 1742342400000 (ms time from 1 Jan,1970)

// let mytime=Date.now()
// console.log(Math.floor(mytime/1000)); //in seconds

let newdate= new Date()
console.log(newdate);
console.log(newdate.getMonth()); // 2 (3rd month , 0 based indexing)
console.log(newdate.getDay()); //3 (monday-1 , tues-2 ,wed-3)

console.log(newdate.toLocaleString('default',{
    weekday:"long"
})) // ctrl+space gets all properties of definition of date //Wednesday is printed

