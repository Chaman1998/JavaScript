function calculateCartPrice(...num1) {
    return num1
}
console.log(calculateCartPrice(200,400,500));

const user = {
    username: "Chaman",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)   //this the 1st type to pass the object in function
handleObject({      //this is the 2nd type to pass the object in function
    username:"Chaman",
    price: 499
})

const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,100,600])); //another way to print. same value print
