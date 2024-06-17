
// // A Promise is an object representing the eventual completion or failure of an asynchronous operation.

// const promiseOne = new Promise(function (resolve, reject) {
//     //Do an async task
//     //DB calls, cryptography, network
//     setTimeout(function () {
//         console.log("Async task is complete");
//         resolve()
//     }, 1000);
// })

// promiseOne.then(function () {
//     console.log("Promise Consumed");
// })
// // =====================Another format=======================================
// new Promise(function (resolve, reject) {
//     setTimeout(() => {
//         console.log("Async 2nd task");
//         resolve()
//     }, 2000);
// }).then(() => {
//     console.log("2nd Promise Consumed");
// })

// // =========================3rd Promises======================================
// const promiseThree = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({ username: 'Chaman', email: 'chaman@gmail.com' })
//     }, 3000)
// })
// promiseThree.then((user) => {
//     console.log(user);
//     console.log(user.username);
// })
// // =========================4th Promises======================================
// const promiseFour = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = false;
//         if (!error) {
//             resolve({ username: 'Chaman', password: '1234' })
//         } else {
//             reject('ERROR: Something went Wrong')
//         }
//     }, 4000)
// })
// promiseFour.then((user) => {
//     return user.username;
//     // console.log(user);
// }).then((username) => {
//     console.log(username);
// }).catch(function (error) {
//     console.log(error);
// }).finally(() => console.log("Finally: The promise is either resolved or rejected"));

// =======================================================================
// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true;
//         if (!error) {
//             resolve({ username: 'javaScript', password: '1234' })
//         } else {
//             reject('ERROR: JS went wrong');
//         }
//     }, 1000)
// })

// async function consumePromiseFive() {
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

// =======================================================================
        //Fetch data from the demo API using await
// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("E. ",error);
//     }
// }

// getAllUsers();
// =======================================================================
        //Without await and try
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))