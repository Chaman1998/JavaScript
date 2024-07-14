/* 
Excercise 1:
Write a JavaScript program to check two 
numbers and return true if one of the number 
is 100 or if the sum of the two numbers is 100
*/

const isEqual = (a, b) => a === 100 || b === 100 || (a + b) === 100;

console.log(isEqual(10, 0));
console.log(isEqual(0, 100));