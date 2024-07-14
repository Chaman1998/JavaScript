/*
Exercise 6:
Write a JavaScript program to create a new string from a given string taking the last 3
characters and added at both the front and back. The string length must be 3 or more, if
not, the original string is returned.
*/
const strCheck = (str) =>
    str.length < 3 ? str : str.slice(0,3) + str.slice(-3);

console.log(strCheck("Wri"));