$(document).ready(function () {
    var score = 0;
    //solution goes here
    //    click handlers
    $('#zero').click(function () {
        //        console.log(score);
        score = 0;
        updateScoreDisplay()
    });

    $('#add5').click(function () {
        //        console.log(score);
        score = score + 5;
        updateScoreDisplay()
    });

    $('#add10').click(function () {
        //        console.log(score);
        score = score + 10;
        updateScoreDisplay()
    });

    $('#sub1').click(function () {
        //        console.log(score);
        score = score - 1;
        updateScoreDisplay()
    });

    function updateScoreDisplay() {
        //    grab the h1
        $('#result').text(score);
        //    set its text to score
    }
});