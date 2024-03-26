let score = "33"
let score2 = "33abc"    //If it's not a number
let score3 = null    //If it's NULL
let score4 = undefined    //If it's undefined

console.log(typeof score);
console.log(typeof(score));

console.log("If score=33 as String");
let valueNumber = Number(score)
console.log(typeof valueNumber);
console.log(valueNumber);

console.log("If score=33abc as String, but not a proper number");
let valueNumber2 = Number(score2)
console.log(typeof valueNumber2);
console.log(valueNumber2);

console.log("If score = null;");
let valueNumber3 = Number(score3)
console.log(typeof valueNumber3);
console.log(valueNumber3);

console.log("If score = undefined;");
let valueNumber4 = Number(score4)
console.log(typeof valueNumber4);
console.log(valueNumber4);
//==================================================
// "33" => 33
// "33abc" => NaN
// "true" = > 1; false=>0
//==================================================
console.log("1 convert to boolean");
let isLoggedIn = 1
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);
// 1 => true; 0 => false
// "" => false
// "chaman" => true