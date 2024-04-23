function one(){
    console.log("One");
    two()   //check without also
}
function two(){
    console.log("two");
    three() //check without also
}
function three(){
    console.log("three");
}

one()
two()
three()

//run this code in browser and see the steps of executions