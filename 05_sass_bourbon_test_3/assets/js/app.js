// Check to see if doc is laoded
console.log('loaded bro!!');


//------------------------------------
// GLOBAL: Event Listeners
//------------------------------------

// Shrink meny on scroll down
$(document).on ('scroll', function(){
  if ($(document).scrollTop() > 100)
  {
    $('header').addClass('shrink');
  }
  else
  {
    $('header').removeClass('shrink');
  }
});

// Shift Counter up when the page goes to the bottom
$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height())
   {
       $('aside').addClass('shift-up');
   }
   else
   {
     $('aside').removeClass('shift-up');
   }
});
