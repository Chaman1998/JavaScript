// Generate a random Color

//==========Create random color code
const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
};

// console.log(randomColor());     //print random generated number
let intervalId;

//============function for start color change
const startChangingColor = function () {
    if(!intervalId){
        intervalId = setInterval(changeBgColor, 100);
    }

    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
        document.querySelector('#colorCode').innerHTML = randomColor();
    }
};
//=============function for stop color change
const stopChangingColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

//===============Button Id Call
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);