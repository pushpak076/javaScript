// array
const myArr=[1,2,3,4,5,6]; //array is oject which contain mix data type
const myHeros=["shaktiman","naagraj"];
const myObjArr=new Array(1,2,"hero");
console.log(myObjArr);
//array creat a sallow copy means referense

//Array methods

myArr.push("manish");  //add an element  ar last
console.log(myArr);

myArr.unshift(9);
console.log(myArr);  //add an element at begin
myArr.shift(9);
console.log(myArr); //pop an element from begin

console.log(myArr.includes(3));
console.log(myArr.indexOf(3)); 

const newArr=myArr.join(); //we get newArr an array in string form
console.log(myArr);
console.log(newArr);  //output in string form
console.log(typeof newArr);


//slice and splice
console.log("A",myArr);
const myn1=myArr.slice(1,3);  //not affect the original one
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3);  //affect the original one 
console.log(myn1);
console.log("C",myn2);
console.log("D",myArr);