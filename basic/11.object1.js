// singleton 
// Object.create

//object literals

const mySym = Symbol("key1")
const mySym2 = Symbol("key2")

const JsUser = {
    name: "Chaman",
    "fullName": "C S",
    age: 25,
    mySym: "mykey1",
    [mySym2]: "mykey2",
    location: "Kolkata",
    email: "abc@gmailcom",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Tuesday"]
}

console.log((JsUser.email))
console.log(JsUser["email"])
// console.log(JsUser.fullName);
console.log(JsUser["fullName"]);
console.log(typeof(JsUser.mySym),JsUser.mySym); //Print mysym2 like stirng
console.log(JsUser[mySym2]);    //Print mysym2 like symbol

JsUser.email = "xyz@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "jkq@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user from greeting");
}
JsUser.greeting2 = function(){
    console.log(`Hello Js user from greeting2, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());    //using `` (backticks) print value