// 1.primitive
// 7 type -> String ,Number , Boolean , null , undefined , Symbol , BigInt
const score=100;
const scorevalue=100.3;

const isLoggedId=false;
const outsidetemp=null

const id=Symbol("123");
const anotherid=Symbol("123");

console.log(id==anotherid);
console.log(id===anotherid);

const bigNumber=246879954661n; //BigInt

// 2. NoN primtive(Reference)
// Array, Object , Function

const heros=["shaktiman" , "naagraj" , "doga"];

let myObj={
    name:"hitesh",
    age:22
}

const myFunction=function(){
    console.log("this is function body");
}

console.log(typeof bigNumber);

// javaScript is dynamic type ->avaScript is a dynamically typed language, 
// which means that data types of variables are determined by the value they 
// hold at runtime and can change throughout the program as we assign different values to them.

// 1. Primitive datatypes:
// String - string
// Number - number
// Boolean - Boolean
// Null - object(****)
// Undefined - undefined
// BigInt - bigint

// 2. Non-primitive datatypes:
// Array - object
// Function - function(object)
// Object - object

//****************** memory in js*************** */
// stack(primitive) ->change in only duplicate  
// heap(non-primitive); //change in original

let a=5;
let b=a;
b=3;
console.log(a,b);   //stack it means change in b not affect the a original value

let obj1={
    name:"xyz",
    age:23
};
let obj2=obj1;
obj2.name="abc";
console.log(obj1,obj2);  //change in obj2 affect the obj1 because of reference