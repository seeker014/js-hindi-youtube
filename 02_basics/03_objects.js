const tinder=new Object() // can also be made like const tinder={}

tinder.id="123"
tinder.name="sammy"
tinder.loggedIn=false;

//console.log(tinder); // { id: '123', name: 'sammy', loggedIn: false }

const user={
    email:"someone",
    fullname:{
        username: {
            firstname:"abhinav",
            lastname:"raj"
        }
    }
}
console.log(user.fullname.username.firstname); //abhinav

const obj1={1:"a", 2:"b"}
const obj2={3:"a", 4:"b"}

//const obj3={obj1,obj2};
//console.log(obj3);  //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

//const obj3=Object.assign({},obj1,obj2); // if we dont put {} , then obj1 has the merged object by default.
// {} putting this means that obj1 and obj2 are merged in a new null {} object.
//console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3={...obj1, ... obj2};
console.log(obj3); // this method used the most

const users=[
    {email:"abc"},{},{}
] //array of objects

users[0].email //abc

console.log(Object.keys(tinder)); //[ 'id', 'name', 'loggedIn' ]
console.log(Object.values(tinder)); //[ '123', 'sammy', false ] 
console.log(Object.entries(tinder)); //[ [ 'id', '123' ], [ 'name', 'sammy' ], [ 'loggedIn', false ] ]

console.log(tinder.hasOwnProperty('name')); //true , if name not present , returns false





