//Array
const myArr = [0,1,2,3,4,5]
const myHeros = ['shaktiman','nagraj'];
const myArr2 = new Array(1,2,3,4,5)

console.log(myArr[1]);

//Array methods
myArr.push(6)   //add a value
//myArr.pop() //remove last value

// myArr.unshift(9)    //add value in the start
//myArr.shift()   //remove value from start

console.log(myArr.includes(9)); //result with true and false only
console.log(myArr.indexOf(3));  //If searching value is present then show the positon
                                //if not then show the result in -1
const newArr = myArr.join()
console.log('In string format: ',newArr);    //show the array in string format
console.log(myArr);

//Slice, Splice
console.log("Normal Array: ",myArr);    //before slice array

console.log('Using Slice: ');   //Slice
const myn1 = myArr.slice(1,3)

console.log(myn1);  //Using Slice
console.log("After Slice Array: ",myArr);

console.log('Using Splice: ');   //Splice
const myn2 = myArr.splice(1,3)
console.log("After Splice Array: ",myArr);
console.log('Splice value: ',myn2);