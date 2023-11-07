// if

if(true){

}

if(false){
    
}

const ch=2;
switch (ch) {
    case 1:
        console.log("1");
        break;
    case 2:
        console.log("2");
        break;

    default:
        break;
}

// nullish coalescing operator ?? 

let val;
val=5??10;
val=null??10;

console.log(val);

// ternary operator
// condition ? true:false;

const a=1<2 ? console.log("true") :console.log("false");