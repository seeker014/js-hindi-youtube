//for 

for (let index = 0; index < 10; index++) {
    const element = index;
    //if (element==5) console.log("5 is best number");
    
    //console.log(element); //prints 0 to 9
}

for (let i=0;i<=10;i++)
{
    //console.log(`Outer loop  value:${i}`);
    
    for (let j=0;j<=10;j++)
    {
        //console.log(`inner loop value ${j} and outer loop ${i}`);
        
    }
} //basic nested loops

let arr=["flash","batman"]
for (let i=0;i<arr.length;i++)
{
    const element=arr[i];
    //console.log(element); //flash 
                         // batman
}

//break & continue

for (let i=1;i<=20;i++)
{
    if (i==5)
    {
        console.log("detected 5");
        break //or continue (normal meaning of both)
    }
    console.log(`Value of i is ${i}`);
}







