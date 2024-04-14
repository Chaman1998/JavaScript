//Global scope
// var c = 300
let a = 300

if(true){
    //Local scope
    let a = 10
    const b = 20
    var c = 30
    console.log("Inner: ",a);
}
for(let i = 0; i < Array.length; i++){
    const element = Array[i];
}



console.log(a);
// console.log(b);
// console.log(c);