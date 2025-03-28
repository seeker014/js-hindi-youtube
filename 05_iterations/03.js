const arr=[1,2,3,4,5]

for (const num of arr) {
    //console.log(num) //prints 1,2,3,4,5 in new lines
}

const greetings="hello"
for (const greet of greetings)
{
    //console.log(`each char is ${greet}`); //prints h,e,l,l,o seperately on new lines
}

//Maps

const map=new Map()
map.set('in',"india")
map.set('usa',"america")
map.set('fr',"france")

console.log(map); //Map(3) { 'in' => 'india', 'usa' => 'america', 'fr' => 'france' }

for (const key of map){
    console.log(key);
}
// [ 'in', 'india' ]
// [ 'usa', 'america' ]
// [ 'fr', 'france' ]

for (const [key,value] of map){
    console.log(key,':',value);
}
// in : india
// usa : america
// fr : france

const obj={
    game1:'nfs',
    game2:'car'
}

for (const [key,value] of obj)
{
    console.log(key,':',value); //objects are not iterable
}
