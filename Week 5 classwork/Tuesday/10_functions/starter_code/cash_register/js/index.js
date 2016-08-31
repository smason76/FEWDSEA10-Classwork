function formatCurrency(number) {
    //format the number to 2 decimal places
    var formattedNumberString = number.toFixed(2);
    //prepend a $
    var formattedNumberString = '$' + formattedNumberString;

    //return that formatted string
    return formattedNumberString;

};

$(document).ready(function () {
    $('#entry').submit(function () {
            var total = 0;

            function handleEntry(event) {
                event.preventDefault();
                //    console.log('handling entry!');

                //get the value of #newEntry
                var newEntryVal = $('#newEntry').val();
                var newEntryNumber = parseFloat(newEntryVal);
                //        console.log(newEntryNumber);

                //check if its a number
                if (newEntryNumber) {
                    //console.log('good number');
                    total = total + newEntryNumber;
                }
            };
            //add the value to the total





            //format the number to 2 decimal places


            //insert a new row into the table body


            //insert an empty td (cell)


            //insert a td with the formatted value
            var formattedEntry = formatCurrency(newEntryNumber);

            $('#entries').append('<tr><td></td><td> + newEntryNumber + </td></tr>');


            //update the total to the new value
            var formattedTotal = formatCurrency(total);

            $('#total').text(formattedTotal);
        });
        //clear the input
    $('#newEentry').val('');

});