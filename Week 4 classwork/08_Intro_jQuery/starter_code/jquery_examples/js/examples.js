// think of ready as just another event handler. It fires a function 
// when that event occurs 
$(document).ready(function(){
  //click example
  $('.click button').click(function(){
    var countElement = $('.click span');
    var count = parseInt(countElement.text());
    countElement.text(++count);
  });

  //slideToggle example
  $('.slideToggle h3').click(function(){
    var toggleText = $('.slideToggle span');
    var text = toggleText.text();
    if(text == 'hide'){
      toggleText.text('show');
    }else{
      toggleText.text('hide');
    }

    $('.slideToggle ul').slideToggle();
  });

  //show/hide example
  $('.hide button').click(function(){
    $('#luke').hide();
    $('#darth').show();
  });

  //slideUp/slideDown example
  $('.slideUpSlideDown button').click(function(){
    $('.blue').slideUp(); //hides
    $('.red').slideDown(); //reveals
  });

  //children example
  $('.children p').children('span').css('color', 'blue');

  //attr example
  // $('body').attr('class', 'magic');
  var bodyClasses = $('body').attr('class');
  $('.attr span').text(bodyClasses);
});