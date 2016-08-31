$(document).ready(doSomething);
//everything here
function doSomething() {
    $('.actions p').click(function () {
        $('ul').hide();
        $('.boxes').slideToggle(function () {
$('.boxes').slideUp();
            $('.boxes').slideDown();
            
        });
    });
};
//.click on "Do Something"

//hide() list  same time

//use .slideToggle() on  same time
// ".boxes" same time