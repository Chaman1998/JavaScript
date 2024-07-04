// let myName = "chaman"

// console.log(myName.truelength);

let myHero = ['spiderman','ironman']

let heroPower = {
    spiderman: "sling",
    ironman: "tech",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.chaman = function(){
    console.log(`Chaman is present in all objects`);
}

//fetch from function
// heroPower.chaman()

//fetch from array
// myHero.chaman()
//we provided a spcial power to the object that fetch from all like fuction array...

//now we try to add this to the array to see that object also fetch that or not!!
Array.prototype.heyChaman = function(){
    console.log("Hey from array");
}

//here we only add this in array that's why it show error
// heroPower.heyChaman()

//Now we run this array, that we add special comment that we fetch with this
// myHero.heyChaman()


//-------------INHERITANCE----------------

const User = {
    name: 'Chaman',
    email: 'abc@gmail.com'
}
const Teacher = {
    makeVideo: true,
}

const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'js assingnment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)
//here we inherite data from Teacher to TeachingSupport


//Remove space and print data only, create own function
let anotherUsername = "Chaman     "
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsername.trueLength()
"Sarkar".trueLength()