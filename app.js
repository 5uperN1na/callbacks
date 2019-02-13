//Synchronous Callback

function greet(name) {
    alert('Hello ' + name);
}

function greetUser(callback) {
    let userName = prompt('Please enter your name.');
    callback(userName);
}

greetUser(greet);

//Asynchronous Callback

setInterval(function () {
    //callback function
    console.log('hello!');
}, 1000);



function greeting(name) {
    console.log(`Hello ${name}, welcome!`);
}

 