$(function(){
  //Hide stuff

  $('#getStarted,#finish,#previous, .hide').hide();
  //alert("hello");
  $('#title').on('mouseover',function(){
  $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
  $('#getStarted').show();
 });

 $('#title').on('mouseleave',function(){
 $('.fa-arrow-alt-circle-left').toggleClass('fa-arrow-alt-circle-right');
});

$('#getStarted').on('click', function(){
$('.hide').show();
$('#getStarted').hide();
$('#survey,#ThankYou').hide();
});

$('#finish').on('click',function(){
  $('.hide,#next, #previous, #finish,#getStarted,#title,#p1').hide();
  $('#survey').show();
});

$('#yes,#no').on('click',function(){
$('#surveytitle').css("background-color","green")
$('#ThankYou').css({
  "border":"1px solid green",
  "background":"#ccc"
   })
$('#yes,#no,#survey').hide();
$('#ThankYou').show()
});

$('#Restart').on('click',function(){
  location.reload();
});





//*next*//
$('#next').on('click',function(){

 var currentItem = $('li.active');
 var nextItem = $('li.active').next();

 currentItem.toggleClass('active');
 nextItem.toggleClass('active');

 if($('li').last().hasClass('active')){
$('#next').hide();
$('#finish').show();
 } else{
$('#next').show();
}

if($('li').first().hasClass('active')){
$('#previous').hide();
} else{
$('#previous').show();



 }

});

//*previous*//
$('#previous').on('click',function(){

 var currentItem = $('li.active');
 var previousItem = $('li.active').prev();

 currentItem.toggleClass('active');
 previousItem.toggleClass('active');

 if($('li').first().hasClass('active')){
$('#previous').hide();
 } else{
$('#previous').show();
 }

 if($('li').last().hasClass('active')){
$('#next').hide();
} else{
$('#next').show();
}
});


});
