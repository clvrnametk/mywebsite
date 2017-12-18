//Check to see it works!!
console.log("I'm working great!!");


//Shrink menu on scroll down
$(document).on ('scroll', function(){
  if ($(document).scrollTop() > 100)
  {
    $('header').addClass('shrink');
    // $('header').addClass('shrink shrink-alt');
    $('.mm-logo-work-small').addClass('mm-logo-show');
    $('.mm-logo-work-large').addClass('mm-logo-hide');
    $('#menuToggle span.only-this').removeClass('hamburgerColorAlt');
  }
  else
  {
    $('header').removeClass('shrink');
    // $('header').removeClass('shrink shrink-alt');
    $('.mm-logo-work-small').removeClass('mm-logo-show');
    $('.mm-logo-work-large').removeClass('mm-logo-hide');
    $('#menuToggle span.only-this').addClass('hamburgerColorAlt');
  }
});


// Change page date to current date
var currentDate = new Date().getFullYear();
$('.current-date-snipet').html(currentDate);


//**************************************//
//****** TRASH BELOW THIS LINE  ********//
//**************************************//

// $('.desc-overlay').hover (function() {
//   console.log("scroll worked!!");
//   $(this).toggleClass('project-hover');
// })

// Accepts any class name
var rellax = new Rellax('.rellax',{
  // center: true;
});
