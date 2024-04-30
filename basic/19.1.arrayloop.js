//for of

// ["","",""]
// [{},{},{}]
// const arr = [1, 2, 3, 4, 5]

// for(const num of arr){
//     console.log(num);
// }

const greeting = "Hello World!"
// for(const greet of greeting){
//     console.log(`Each char is ${greet}`);
// }

//=====================MAPS===================
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")   //It does not show in the output

// console.log(map);    //print all data in {...}

for(const [key,value] of map){
    // console.log(key,':-',value);     //Print all data in [....] with value
}
const myObject = {
    'game1' : 'NFS',
    'game2' : 'Spiderman'
}

// for(const [key,value] of map){       //myObject is not iterable
//     console.log(key,':-',value);
// }

