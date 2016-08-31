$(document).ready(function () {
    $('#convert').submit(function (event) {
        event.preventDefault();

        //        get the fahrenheit temperature

        var fTemp = $('#fahrenheit').val();

        //        get the celsius temperature

        var cTemp = $('#celsius').val();
        //        console.log(fTemp);

        //        see which is empty
        if (fTemp != '' && cTemp === '') {
            console.log('fahrenheit conversion');
            $('#celsius').val(fTemp);

        } else if (cTemp != '' && fTemp === '') {
            console.log('celsius conversion');
            $('#fahrenheit').val(cTemp);
        }

        //        do the conversion

        // celsius to fahrenheit
        // http://www.rapidtables.com/convert/temperature/how-celsius-to-fahrenheit.htm
        $('#convert').click

        function cToF(cTemp) {
            return cTemp * 9 / 5 + 32;
        }

        // fahrenheit to celsius
        // http://www.rapidtables.com/convert/temperature/how-fahrenheit-to-celsius.htm
        $('#convert').click

        function fToC(fTemp) {
            return (fTemp - 32) * 5 / 9;
        }
        //        update the blank field to that converted value


    });

});