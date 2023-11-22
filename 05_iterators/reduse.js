const array=[1,2,3,4,5]

const initial=0;

const newArry=array.reduce(function(acc,curr){
    return acc+curr
},0)


const mytotal=array.reduce((acc,curr)=>acc+curr,0)
// console.log(newArry);
console.log(mytotal);


const shopingCart=[
    {
        itemName:"js",
        price:2000
    },
    {
        itemName:"c++",
        price:1000
    },
    {
        itemName:"java",
        price:2500
    }
]

const toPay=shopingCart.reduce((acc,item)=>acc+item.price,0)

console.log(toPay);