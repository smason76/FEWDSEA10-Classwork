$(document).ready(function () {
    function toggleAnswer1() {
        //change answer1 to 'you outta know'
        //if answer1 says you outta know change it back to what does faq stand for?
//        $('#answer1').slideToggle();
        
        var questionText = $('#question1').text();
    }

    function toggleAnswer2() {
        $('#answer2').slideToggle();
    }

    function toggleAnswer3() {
        $('#answer3').slideToggle();
    }
    $('#answer1').hide();
    $('#answer2').hide();
    $('#answer3').hide();
    $('#question1').click(toggleAnswer1);
    $('#question2').click(toggleAnswer2);
    $('#question3').click(toggleAnswer3);
});