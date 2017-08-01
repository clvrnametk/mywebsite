// Check to see if doc is laoded
console.log('loaded bro!!');


//------------------------------------
// ANIMATED NAV & COUNTER
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

//------------------------------------
// Scrollify
//------------------------------------

$(function(){
  $.scrollify({
    section:".row-FV",
    scrollbars:false,
    interstitialSection : "footer",

    before: function(i) {
      console.log(i);
    },
    after: function(i) {
      $('.counter-num').html((i+1) + ' of 5');
    }
  })
});


//------------------------------------
// SAMPLE ***************** BELOW
//------------------------------------

// $.scrollify({
//   section : "section",
//   sectionName : "section-name",
//   interstitialSection : "",
//   easing: "easeOutExpo",
//   scrollSpeed: 1100,
//   offset : 0,
//   scrollbars: true,
//   standardScrollElements: "",
//   setHeights: true,
//   overflowScroll: true,
//   updateHash: true,
//   touchScroll:true,
//   before:function() {},
//   after:function() {},
//   afterResize:function() {},
//   afterRender:function() {}
// });
