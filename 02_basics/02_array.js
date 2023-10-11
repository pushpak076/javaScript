const marvel_heros=["thor","ironman","spiderman"];
const dc_heros=["superman","flash","batman"];

// marvel_heros.push(dc_heros); //not good practice
// console.log(marvel_heros); //consider dc_heros as an element

const all_Heros=marvel_heros.concat(dc_heros); //combine two array
console.log(all_Heros);

const all_new_heros=[...marvel_heros, ...dc_heros] // using spred
console.log(all_new_heros); 

const another_array=[1,2,3,[4,5,6],7,[8,9,[10,11]]];
const real_another_array=another_array.flat(Infinity);
console.log(real_another_array);


console.log(Array.isArray(another_array));
console.log(Array.from("hitesh"));

console.log(Array.from({name:"hitesh"}));

let score1=100;
let score2=200;
let score3=300;

console.log(Array.of(score1 , score2 , score3));