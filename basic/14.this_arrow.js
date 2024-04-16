const user = {
    username: "chaman",
    price: 999,

    welcomeMassage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }

}
//=================Try to run this================
// user.welcomeMassage()
// user.username = "Sam"
// user.welcomeMassage()
//================================================
// console.log(this);
//================================================

// function one(){
//     //let username = "Chaman"
//     console.log(this.user);
// }
// one()

// ===============================================
// const one = function () {
//     //let username = "chaman"
//     console.log(this.username);
// }
// one()
// ===============================================
// const one = () => {
//     //let username = "chaman"
//     console.log(this.username);
// }
// one()

// ============Basic Arrow function================
// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(3,4));
// ================================================
// const addTwo = (num1,num2) => num1+num2      //Implicit return

// console.log(addTwo(4,5));
// ================================================
// const addTwo = (num1,num2) => ( num1+num2 )    //Another way to return value // Implicit return

// console.log(addTwo(5,6));
// ================================================

//---------------Object return--------------------
const obj = (num1,num2) => ( { username:"chaman" } )

console.log(obj());

// ================================================
