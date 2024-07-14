/*
Exercise 12:

Write a JavaScript program to find the number of 
even values up to a given number
*/

const countEventNumbers = (arr) => 
    arr.filter(num => num % 2 ===0).length;

const createArrayOfNumbers = (num) => {
    const returnArray = [];
    for (let i = 0; i < num; i++) {
        returnArray.push(i);
    }
    return returnArray;
};

console.log(countEventNumbers(createArrayOfNumbers(6)));
console.log(countEventNumbers(createArrayOfNumbers(9)));