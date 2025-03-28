const obj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby'
}

for (const key in obj) { //for in loop for objects
    console.log(`${key} shortcut is for ${obj[key]}`);
}
// js shortcut is for javascript
// cpp shortcut is for c++
// rb shortcut is for ruby

const programming=["js","rb","cpp"]
for (const key in programming)
{
    console.log(key); // 0,1,2 in diff lines (keys are indices of array)
    console.log(programming[key]); //js,rb,cpp in diff lines
}

// const map=new Map()
// map.set('in',"india")
// map.set('usa',"america")
// map.set('fr',"france")

// for (const key in map)
// {
//     console.log(key); //not iteratable
// }



