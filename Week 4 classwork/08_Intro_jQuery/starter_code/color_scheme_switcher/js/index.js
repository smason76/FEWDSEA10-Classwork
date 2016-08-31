document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('pinkButton').onclick = switchPink;

function switchGray() {
  document.body.style.backgroundColor = 'gray';
 document.body.style.color = 'white';
}

function switchWhite() {
  document.body.style.backgroundColor = 'white';
  document.body.style.color = 'black';
}

function switchBlue(){
  document.body.style.backgroundColor = 'blue';
  document.body.style.color = 'yellow';
}

function switchPink(){
  document.body.style.backgroundColor = 'pink';
  document.body.style.color = 'green';
}
