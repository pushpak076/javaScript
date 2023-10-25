function sayMyname(){
    console.log("P");
    console.log("A");
    console.log("T");
    console.log("E");
    console.log("L");
}

// sayMyname();

function add(a,b){  //parameter 
    return (a+b);
}
// const ad=add(2,3); //argument
// console.log(ad);


function loginMsg(username="sam"){
    if(username === undefined){
        console.log("please enter a username : ");
        return ;
    }
    return `${username} just logged in`
}

// console.log(loginMsg("patel"));
// console.log(loginMsg());


// function calculateCardPrice(...num1){ // called rest
//     return num1;
// }

// console.log(calculateCardPrice(200,100,300));

function calculateCardPrice(val1 ,val2,...num1){ // called rest
    return num1;
}

// console.log(calculateCardPrice(200,100,300,400));



const user={
    userName:"patel",
    price:199
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.userName} and price is ${anyobject.price}`);
}

// handleobject(user);


const myArr=[100,200,300,500];
function arr(){
    return myArr[0];
}
// console.log(arr(myArr));