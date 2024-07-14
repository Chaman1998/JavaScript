/* Exercide: 2

Write a JavaScript exercise to get the extension 
of a filename */

const getFileExtension = (str) => str.slice
(str.lastIndexOf('.'));

console.log(getFileExtension('index.html'));