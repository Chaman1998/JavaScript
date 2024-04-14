function one(){
    const username = "Chaman"

    function two(){
        const website = "github"
        console.log(username);
    }
    // console.log(website);    //show error here
    two()
}
// one()    //try this to run

if(true){
    const username = "chaman"
    if(username === "chaman"){
        const website = " github"
        // console.log(username + website); //try this to run
    }
    // console.log(website);    //try this to run
}
// console.log(username);   //try this to run

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log(addone(5));     //It run this
function addone(num){
    return num + 1
}
addone(5)   //it does not show the result/print

//console.log(addtwo(5));      //But this does not executed
//Because it hold the value in a variable
const addtwo = function(num){
    return num + 2
}
addtwo(5)   //it does not show the result/print