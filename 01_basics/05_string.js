const name="hite-sh";
const repoCount=50;

console.log(name+repoCount+"Value");

console.log(`hello my name is ${name.toUpperCase()} and my repo count is ${repoCount}`);

const gameName=new String('Hitesh');


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));

const newString=gameName.substring(1,4);
console.log(newString);

const anotherString=gameName.slice(-5,4);
console.log(anotherString);

const new_space_string="   hitesh     ";
console.log(new_space_string);
console.log(new_space_string.trim());

const url="https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20','-'));
console.log(url.includes('%20'));
console.log(url.includes('hitesh'));
console.log(url.includes('kuch_nahi'));

console.log(name.split('-'));
console.log(gameName.split('-'));

