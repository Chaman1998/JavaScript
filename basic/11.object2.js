// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Chaman",
            lastname: "S"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2 }  //normal marge the data

//const obj3 = Object.assign({},obj1, obj2)   //Object.assign(target, source)
//console.log(obj3);

const obj3 = {...obj1, ...obj2}

console.log(obj3);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 2,
        email: "xyz@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderUser);    //normal 
console.log(Object.keys(tinderUser));   //using keys
console.log(Object.values(tinderUser)); //using values
console.log(Object.entries(tinderUser)); //using entries

console.log(tinderUser.hasOwnProperty('isLogged')); //Check if 'isLogged' is present in the 'tinderUser'. 
