const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')
const h1 = document.querySelector('h1')
const h2 = document.querySelector('h2')
const h3 = document.querySelector('h3')

buttons.forEach(function(button){
    // console.log(button); //try to run this indivisualy
    // button.addEventListener('click',function(e){     //this is for 'click' event
    button.addEventListener('mouseover',function(e){        ////this is for 'hover' event
        // console.log(e);             //Try this run also
        console.log(e.target);
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'black';
            h2.style.color = 'black';
            h3.style.color = 'black';
        }
        if(e.target.id === 'white'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'black';
            h2.style.color = 'black';
            h3.style.color = 'black';
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'white';
            h2.style.color = 'white';
            h3.style.color = 'white';
        }
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
            h1.style.color = 'black';
            h2.style.color = 'black';
            h3.style.color = 'black';
        }
    });
    button.addEventListener('mouseout', function (e) {
        body.style.backgroundColor = 'black';
        h1.style.color = 'white';
        h2.style.color = 'white';
        h3.style.color = 'white';
    });
});
