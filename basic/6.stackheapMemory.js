//Primitive
// 7 type : String, Number, Boolean, null, undefined, Symbol, BigInt

const scrore = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

//Both same
let useEmail = undefined
let useEmail2;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // Output:- false

//BigInt declare
const bigNumber = 3264756352243746563n

//Reference (Non Primitive)
//Array, Objects, Functions

//Array declare
const heros = ["shaktiman","nagraj","doga"]

//Object declare
let myIbj= {
    name:"Chaman",
    age:25,
}

const myFunction = function () {
    console.log("Hello World");
}
console.log(typeof myFunction);
myFunction();

// =======================================================

// Stack (Primitive), Heap (None-Primitive)

//Ex: Stack Memory
//Primitive datatype
let myName = "Chaman"

let anotherName = myName

anotherName = "Koushik"

console.log(myName);
console.log(anotherName);

//---------------------------------------------
//Ex: Heap Memory
//Non-Primitive datatype
let userOne = {
    email: "abc@gmail.com",
    upi: "use@upi"
}

let userTwo = userOne

userTwo.email = "xyz@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);