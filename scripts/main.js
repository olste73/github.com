// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

function multiply(num1,num2) {
    var result = num1 * num2;
    return result;
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ff-logo.svg') {
        myImage.setAttribute ('src','images/ff-logo2.png');
    } else {
        myImage.setAttribute ('src','images/ff-logo.svg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Мой главный заголовок, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'Мой главный заголовок111, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}