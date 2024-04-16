//Immediately Invoked Function Expressions (IIFE)

(function one() {
    //Named IIFE
    console.log(`DB connected`);
})();   //use ; for end this function because js does not know where to stop and it effect the next code/function

// one()    //use 1st separately

//Structure of IIFE
// ()()
// **to remove the global scope variable and use separately 

//unnamed IIFE
( (name)=>{     //use this arrow function with variable
    console.log(`DB connected with arrow function. ${name}`);
})("chaman");

