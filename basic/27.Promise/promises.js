
// A Promise is an object representing the eventual completion or failure of an asynchronous operation.

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    //DB calls, cryptography, network
    setTimeout(function() {
        console.log("Async task is complete");
        resolve()
    }, 1000);
})

promiseOne.then(function(){
    console.log("Promise Consumed");
})

// =====================Another format=======================================
new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async 2nd task");
        resolve()
    }, 2000);
}).then( () => {
    console.log("2nd Promise Consumed");
})

// =========================3rd Promises======================================
const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({username:'Chaman',email:'chaman@gmail.com'})
    }, 3000)
})
promiseThree.then((user)=>{
    console.log(user);
    console.log(user.username);
})
// =========================4th Promises======================================
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({username:'Chaman',password:'1234'})
        }else{
            reject('ERROR: Something went Wrong')
        }
    }, 4000)
})
const username = promiseFour.then((user)=>{
    return user.username;
    // console.log(user.username);
})