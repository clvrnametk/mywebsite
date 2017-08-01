//------------------------------------
// ANIMATED NAV & COUNTER
//------------------------------------

// Shrink meny on scroll down
// $(document).on ('scroll', function(){
//   if ($(document).scrollTop() > 100)
//   {
//     $('header').addClass('shrink');
//   }
//   else
//   {
//     $('header').removeClass('shrink');
//   }
// });

// Shift Counter up when the page goes to the bottom
// $(window).scroll(function() {
//    if($(window).scrollTop() + $(window).height() == $(document).height())
//    {
//        $('aside').addClass('shift-up');
//    }
//    else
//    {
//      $('aside').removeClass('shift-up');
//    }
// });

//------------------------------------
// SCROLLIFY: Snap on scroll + Increment Counter
//------------------------------------

const mq = window.matchMedia( "(max-width: 768px)" );

// Tested loading scrollify in media query
/*
var scrolling = function(){
  if (mq.matches) {
    console.log('768!!');
  } else {
    $(function(){
      $.scrollify({
        section:".section-VF",
        scrollbars:false,
        interstitialSection : "footer",

        before: function(i) {
          console.log(i);
          if (i == 5) {
            $('.counter-num').html('5 of 5');
            $('aside').addClass('shift-up');
          } else if (i < 5) {
            $('aside').removeClass('shift-up');
            $('.counter-num').html((i+1) + ' of 5');
          };
          if (i == 0) {
            $('header').removeClass('shrink');
          } else if (i != 0) {
            $('header').addClass('shrink');
          };
        },
        after: function(i) {
    //      $('.counter-num').html((i+1) + ' of 5');
        }
      })
    });
  }
};
*/

$(function(){
  $.scrollify({
    section:".section-VF",
    scrollbars:false,
    interstitialSection : "footer",

    before: function(i) {
      console.log(i);
      if (i == 5) {
        $('.counter-num').html('5 of 5');
        $('aside').addClass('shift-up');
      } else if (i < 5) {
        $('aside').removeClass('shift-up');
        $('.counter-num').html((i+1) + ' of 5');
      };
      if (i == 0) {
        $('header').removeClass('shrink');
      } else if (i != 0) {
        $('header').addClass('shrink');
      };
    },
    after: function(i) {
//      $('.counter-num').html((i+1) + ' of 5');
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
