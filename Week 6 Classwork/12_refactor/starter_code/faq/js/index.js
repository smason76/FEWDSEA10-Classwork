$(document).ready(function () {
    $('.answer').hide();


    $('.question').on('click', function () {
        console.log(this);
        //.next('selector');
        $(this).next('.answer').slideToggle();


    });

});