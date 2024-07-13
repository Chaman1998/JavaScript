/*
Excercise 3:
Write a JavaScript program to replace every character in a given string with the character
following it in the alphabet
*/

const moveChar = (str) =>
    str
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
        .join('');

console.log(moveChar('hello'));