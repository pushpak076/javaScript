const user={
    username:"patel",
    price:666,

    welcomemessage:function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomemessage();
// user.username="mad";
// user.welcomemessage();


// const chai=function (){
//     console.log(this);
// }

// funn();

// const chai = ()=>{
//     // console.log(this); // this can  not in arrow function 
// }

// funn();


// const add=(num1,num2)=>{
//     return num1+num2;   //explicitly return 
// }

// console.log(add(4,5));


// const addtwo=(num1,num2)=>num1+num2;
const addtwo=(num1,num2)=>(num1+num2);  //implicitly return 

console.log(addtwo(4,5));
