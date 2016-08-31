//buttons
var stopButton = document.getElementById('stopButton');
var slowButton = document.getElementById('slowButton');
var goButton = document.getElementById('goButton');

stopButton.onclick = function () {
    illuminateLight(stopButton);
}
slowButton.onclick = function() {
    illuminateLight(slowButton);
}
goButton.onclick = function() {
    illuminateLight(goButton);
}
//stopButton.onclick = illuminateRed;
//slowButton.onclick = illuminateYellow;
//goButton.onclick = illuminateGreen;

//lights
var stopLight = document.getElementById('stopLight');
var slowLight = document.getElementById('slowLight');
var goLight = document.getElementById('goLight');



function illuminateRed() {
    clearLights();
    stopLight.style.backgroundColor = "red";
}

function illuminateYellow() {
    clearLights();
    slowLight.style.backgroundColor = "yellow";
}

function illuminateGreen() {
    clearLights();
    goLight.style.backgroundColor = "green";
}

function clearLights() {
    stopLight.style.backgroundColor = "black";
    slowLight.style.backgroundColor = "black";
    goLight.style.backgroundColor = "black";
}

function illuminateLight(button) {
    if (button.id == 'stopButton') {
        console.log('stop button clicked!');
        clearLights();
        stopLight.style.backgroundColor = "red";
    }
    if (button.id == 'slowButton') {
        clearLights();
        slowLight.style.backgroundColor = "yellow";
    }
    if (button.id == 'goButton') {
        clearLights();
        goLight.style.backgroundColor = "green";
    }
}