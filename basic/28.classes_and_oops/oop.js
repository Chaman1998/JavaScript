const user = {
    username: "Chaman",
    logiCount: 0,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got User details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function
// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this     //it by default call
}

const userOne = new User("Chaman",10,true)
console.log(userOne);

const userTwo = new User("Sarkar",11,false)
//when we use 'new' keyword it does not effect data of other 'User' users
//when we use 'new' keyword, then the empty object create. It calls instance.
//Constructor function call when use 'new' keyword


console.log(userOne.constructor);
console.log(userTwo);


//Using 'instanceof'
const three = new User("Kumar",12,true)
console.log(three instanceof User);
console.log(three instanceof Object);
