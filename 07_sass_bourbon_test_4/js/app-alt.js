// CHECK FOR LOAD
console.log('alt loaded bro!!');


//Shrink meny on scroll down
$(document).on ('scroll', function(){
  if ($(document).scrollTop() > 100)
  {
    $('header').addClass('shrink shrink-alt');
  }
  else
  {
    $('header').removeClass('shrink shrink-alt');
  }
});
