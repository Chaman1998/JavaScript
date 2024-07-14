/*
Exercise 4:
Given two values, write a JavaScript program to find 
out which one is nearest to 100
*/

const nearest = (str1, str2) => 
    (100 - str1) < (100 - str2) ? str1 : str2;

console.log(nearest(49,14));