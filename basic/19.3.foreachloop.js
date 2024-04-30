const coding = ["js", "rb" ,"py" ,"java" ,"cpp"]

//----------------foreach-----------------
//=============with Function===============
// coding.forEach( function (item){
//     console.log(item);
// })

// ==========WITH ARROW Function=============
// coding.forEach( (item) => {
//     console.log(item);
// })

//==========CALL BACK Function===============
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

// ==========================================================
//Fetch the value from the object of an array
//example : how we fetch the perticular data from the database
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
})