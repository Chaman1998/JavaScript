const name = "Chaman"
const repoCount = 50

console.log(name + repoCount);
console.log(typeof(name + repoCount));

//Use `` backticks
console.log(`Hello My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('Chaman')
console.log(gameName[4]);
console.log(gameName.__proto__);

console.log(gameName.length);   //6
console.log(gameName.toUpperCase());    //CHAMAN
console.log(gameName.charAt(4));    //a
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString); //Cham

//use negetive slice
const anotherString1= gameName.slice(-2,4);
console.log(anotherString1);

const anotherString2 = gameName.slice(0,4);
console.log(anotherString2);

const newStringOne = "  chaman  ";
console.log(newStringOne);  //print with space
console.log(newStringOne.trim());   //print without space

const url = "https://google.com/search?q=youtube"

console.log(url.replace('youtube','wikipedia'));

console.log(url.includes('youtube'));