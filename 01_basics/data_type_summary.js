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

