const myNums = [1, 2, 3]

//================REDUCE USING Function==========================
const myTotal = myNums.reduce(function(acc, currval){
    console.log(`acc: ${acc} and current Value: ${currval}`);
    return acc + currval
},0)

//================USING ARROW Function REDUCE==========================
// const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "Python course",
        price: 999
    },
    {
        itemName: "Mobile dev course",
        price: 5999
    },
    {
        itemName: "Data Scince course",
        price: 12999
    },
]
const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);