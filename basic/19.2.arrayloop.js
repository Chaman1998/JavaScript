const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : "Ruby",
    swift : "Swift by apple"
}

for(const key in myObject){
    // console.log(myObject[key]);
    // console.log(`'${key}' for shortcut is for '${myObject[key]}'`);
}

const programming = ["js", "rb" ,"py" ,"java" ,"cpp"]
for(const key in programming){
    // console.log(key);    //print only key value
    // console.log(programming[key]);  //print value with this
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")

// for(const key in map){       //here does not iterable
//     console.log(key);
// }