//click +hide

$('.one').click(function(){
    $('.paragraph1').hide();
});

//mouse move
$(document).on('mousemove', function(e){
    $('#coords').html('Coords: Y: ' + e.clientY+"X:"+e.clientX);
})



//.text
$('.text').text('Hello Matrix Master');



//.html
$('.html').html('Happy Coding');




$('.btn-outline-danger').click(function(){
    $('#box').fadeOut();
})