var grayButton = document.getElementById('grayButton');
var whiteButton = document.getElementById('whiteButton');
var blueButton = document.getElementById('blueButton');
var pinkButton = document.getElementById('pinkButton');

grayButton.onclick = switchGray;
whiteButton.onclick = switchWhite;
blueButton.onclick = switchBlue;
pinkButton.onclick = switchPink;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
  document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlue() {
    document.body.style.backgroundColor = 'blue';
    document.body.style.color = '#ffff00';
}


function switchPink(){
    document.body.style.backgroundColor = 'pink';
    document.body.style.color = 'green';
}

function sayHi(name){
    console.log("Hello " + name);
}
