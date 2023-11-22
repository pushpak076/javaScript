// const coding=["js","ruby","java","python"]

// const values=coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values);

const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=mynums.filter((num)=> num>4)

// console.log(newNums);

// const narray=[]

// mynums.forEach((num)=>{
//     if(num >4){
//         narray.push(num)
//     }
// })

// console.log(narray);

const books=[
    {title:'book one',genre:'fiction',publish:1981,edition:2004},
    {title:'book two',genre:'non-fiction',publish:1992,edition:2007},
    {title:'book three',genre:'history',publish:1999,edition:2007},
    {title:'book four',genre:'science',publish:2000,edition:2007},
];

// const userbooks=books.filter((bk)=> bk.genre=='history')

const userbooks=books.filter((bk)=> bk.publish>=2000)

console.log(userbooks);