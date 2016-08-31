$(document).ready(handleLights);

function handleLights() {
    $('#stopButton').click(function () {
        clearLights();
        $('#stopLight').css('background', 'red');
    });
    $('#slowButton').click(function () {
        clearLights();
        $('#slowLight').css('background', 'yellow');
    });
    $('#goButton').click(function () {
        clearLights();
        $('#goLight').css('background', 'green');

    });

    function clearLights() {
        $('.bulb').css('background', 'black');
    };
};
//
////buttons
//var stopButton = document.getElementById('stopButton');
//var slowButton = document.getElementById('slowButton');
//var goButton = document.getElementById('goButton');
//
////lights
//var stopLight = document.getElementById('stopLight');
//var slowLight = document.getElementById('slowLight');
//var goLight = document.getElementById('goLight');
//
////stopButton.onclick = illuminateRed;
//stopButton.onclick = illuminateLight(stopButton);
//slowButton.onclick = illuminateLight(slowButton);
//goButton.onclick = illuminateLight(slowButton);
//
//function illuminateRed() {
//    clearLights();
//    stopLight.style.backgroundColor = "red";
//}
//
//function illuminateYellow() {
//    clearLights();
//    document.getElementById('slowLight').style.backgroundColor = "purple";
//}
//
//function clearLights() {
//    document.getElementById('stopLight').style.backgroundColor = "black";
//    document.getElementById('slowLight').style.backgroundColor = "black";
//    document.getElementById('goLight').style.backgroundColor = "black";
//}
//
//function illuminateLight(button) {
//    if (button.id == 'stopButton') {
//        clearLights();
//        stopLight.style.backgroundColor = "red";
//    }
//    if (button.id == 'slowButton') {
//        clearLights();
//        document.getElementById('slowLight').style.backgroundColor = "yellow";
//    }
//    if (button.id == 'goButton') {
//
//    }
//
//}