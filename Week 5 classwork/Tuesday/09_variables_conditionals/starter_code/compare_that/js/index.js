$(document).ready(function () {
    //your solution goes here
    //    click handler
    $('#submit').click(function () {
        var num1 = parseFloat($('#a').val());
        var num2 = parseFloat($('#b').val());

        //        console.log(num1, num2);
        //    if num1 is more than num2
        //        set comparison to >
        if (num1 > num2) {
            $('#comparison').text('>');
        }

        //        if num1 is less than num 2
        //        set comparison to <
        if (num1 < num2) {
            $('#comparison').text('<');
        }

        //        if they are equal
        //        set comparison to =
        if (num1 === num2) {
            $('#comparison').text('=');
        }
    });


});