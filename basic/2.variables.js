const accountId = 2024
let accountEmail = "test@gmail.com"
var accountPassword = "12345"
let accountState;
/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/
accountCity = "Bangalore"

//accountId = 2cls
accountPassword = "54321"
accountCity = "Bangaluru"

console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);