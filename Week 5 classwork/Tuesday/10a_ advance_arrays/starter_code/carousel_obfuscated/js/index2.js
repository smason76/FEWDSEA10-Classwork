//to update the images
//$('#image-to-vote-on').attr('src', new image)
//var images = [
//    'path/to/image1'
//    'path/to/image2'
//    ];
//var current image = ?



var myImages = [
'images/food1.jpg',
'images/food2.jpg',
'images/food3.jpg',
'images/food4.jpg',
'images/food5.jpg',
'images/food6.jpg',
'images/food7.jpg',
'images/food8.jpg'
];

$(document).ready(function () {
    var imageIndex = 0;

    //click handlers for next and previous
    $('.btn[value="Skip"]').click (function(){
//        alert('skip handler activated');
        var nextImage = $(this).next myImages++
      
      });


    //updateIndex accordingly


    //update src of target image to myImages[imageIndex]

});