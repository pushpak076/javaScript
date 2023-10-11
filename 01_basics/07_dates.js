// javaScript date objet represent a single moment in time in a platform independent format.
// date begining of jan 1,1970,UTC(the epoch).

let myDate=new Date();

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());  //most important 

let myCreatedDate=new Date(2000,3,20);
// console.log(myCreatedDate.toDateString());

// let myTimeStemp=Date.now();
// console.log(myTimeStemp.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate=new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

newDate.toLocaleDateString('default',{
    weekday: "long",
    
})