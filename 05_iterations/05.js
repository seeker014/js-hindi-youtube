const coding=["js","cpp","java","python"]

// coding.forEach( function (val) {   //no need to write name of func since it is callback func
//     console.log(val); //js,cpp,java,python
// } )

// coding.forEach ( (item)=>{   //no need to write name of func since it is callback func
//     console.log(item); //js,cpp,java,python
// } ) 

// function print(item){
//     console.log(item);
// }
// coding.forEach(print) //js,....,python

coding.forEach(  (item,index,arr)=>{
    console.log(item,index,arr);
} )
// js 0 [ 'js', 'cpp', 'java', 'python' ]
// cpp 1 [ 'js', 'cpp', 'java', 'python' ]
// java 2 [ 'js', 'cpp', 'java', 'python' ]
// python 3 [ 'js', 'cpp', 'java', 'python' ]

const mycode=[   //array has 3 objects
    {
        language:"javascrpt",
        file:"js"
    },
    {
        language:"java",
        file:"java"
    },
    {
        language:"python",
        file:"py"
    }
]

mycode.forEach((item)=>{  //here item represents objects in array one by one
    console.log(item.language); //javascrpt,java,python
})