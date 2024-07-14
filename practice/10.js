/*
Exercise 10:
Write a JavaScript program to check a given string 
contains 2 to 4 occurrences of a specified character.
*/

const countChar = (str, char) =>
    str.split('').filter(ch => ch === char).length;

const totalCount = (str, char) => 
    countChar(str, char) >= 2 && countChar(str, char) <=4;

console.log(countChar('oops', 'o'));