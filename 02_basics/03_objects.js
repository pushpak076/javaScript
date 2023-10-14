// we can declare object by two type 
// a object constructor object.create()
// b object literal const jsUser={};

//object literals
const jsUser={
    "name": "hitesh",
    age:13,
    loation:"jaipur",
    email:"hitesh@gmail.com",
    "full name":"rahul raj"
};

console.log(jsUser.name);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);

jsUser.greeting=function(){
    console.log("hello world");
}

jsUser.greeting2=function(){
    console.log(`hello world , ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greeting2());
