let myDate = new Date();
console.log(myDate);
console.log('And this Date type: ',typeof(myDate));

console.log('toString: ',myDate.toString());
console.log('toDateString: ',myDate.toDateString());
console.log('toISOString: ',myDate.toISOString());
console.log('toLocaleString: ',myDate.toLocaleString());
console.log('toDateString: ',myDate.toDateString());
console.log('toJSON: ',myDate.toJSON());
// ==========================================================
console.log('My created date:--');
let myCreatedDate1 = new Date(2024,0,23);    //In JavaScript Months starts with 0.
console.log(myCreatedDate1.toDateString());
// --------------------------------------------
let myCreatedDate2 = new Date(2024,0,23,5,3); 
console.log(myCreatedDate2.toLocaleString());   //Other ..5,3 represent the time format

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString());

//-----------use Date.now()------------
console.log('use Date.now(), In Millisecond:- ');
let myTimeStamp = Date.now()
let mycreatedDate4 = new Date("01-14-2024")
console.log(myTimeStamp);   //In Millisecond
console.log(mycreatedDate4.getTime());  //In Millisecond

//Using Math
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
//Now we use different type of functions with that
// .getDate
// .getDay
// .getFullYear
// .getHours
// .getMilliseconds
// .getMinutes
// .getMonth
// .getSeconds

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: '',
})