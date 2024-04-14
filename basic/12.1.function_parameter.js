function sayMyNsame(){
    console.log("Chaman");
    console.log("Sarkar");
}

sayMyNsame()

function addTwoNumbers(number1, number2){
   console.log( number1+number2);
}

//If we don't check the input type in the function
addTwoNumbers(3,"4")    //if another number is string
addTwoNumbers(3,"a")    //if another number is string
addTwoNumbers(3,null)   //if one input is NULL
addTwoNumbers(3,4)  //Two number print

//if we want to store the add value
const result = addTwoNumbers(12,24)
//Now print this value
console.log("Result:", result);    //but here it print 'undefined'

//=============================================================
//If wnat to store the return value then 
function addTwoNumbers2(number1, number2){
    let result= number1+number2
    console.log("Chaman");
    return result
    // return number1+number2  //We also return the value like this
    console.log("Sarkar");  //after return the output any line will be executed
 }
 const result2 = addTwoNumbers2(12,24)
 console.log("Result2:", result2);

// ========================================================
console.log("Using `.`  ");

 function loginUserMessage(username = "Sam"){   //if we enter by default value
   if(!username){
      console.log("Please enter a username");
      return
   }
    return `${username} just logged in`
 }
 console.log(loginUserMessage("Chaman"));
 console.log(loginUserMessage()); //when we don't pass any value
