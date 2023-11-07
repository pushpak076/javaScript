// for

// for(let index=0;index<10;index++){
//     const element=index;
//     console.log(element+1);
// }

// for (let index = 0; index < 5; index++) {
//     console.log(`${index}`);
//     for (let index1 = 0; index1 < 5; index1++) {
//         console.log(`${index1}`);
        
//     }
// }
let i=0
// while (i<=10) {
//     console.log(`value of index is ${i}`);
//     i++;
// }

// do {
//     console.log(`value of index is ${i}`);
//     i++;
// } while (i<=10);

// for of loop
// const arr=[1,2,3,4,5];
// for (const val of arr) {
//     console.log(val);
// }

// const greeting ="hello world";
// for (const greet of greeting) {
//     console.log(`each char is ${greet}`);
// }


// Maps

const map=new Map();
map.set('in',"india");
map.set('USA',"united state of America");

// for (const [key,value] of map) {
//     console.log(key," ",value);
// }

// const myobject={
//     'game1':'NFS',
//     'game2':'spider'
// }

// for (const [game , name] of myobject) {
//     console.log(game,"ka name",name);
// }

const myobject={
    js:'javaScript',
    cpp:'c++'
}

// for (const key in myobject) {
//     console.log(`${key} is shortcut for ${myobject[key]}`);
// }

// const programming=["js","rb","cpp","c"];
// for (const key in programming) {
//     console.log(programming[key]);
// }

const coding=["js","cpp","java","c#"];

// coding.forEach(function (val){
//     console.log(val);
// })

// coding.forEach((val)=>{
//     console.log(val);
// })

const myCoding=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"c++",
        languageFileName:"cpp"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName," ",item.languageFileName);
})