console.log("I'm working great!!");

//Shrink menu on scroll down
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
