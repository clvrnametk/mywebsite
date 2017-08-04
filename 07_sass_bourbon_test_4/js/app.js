// CHECK FOR LOAD
console.log('loaded bro!!');

// SCROLLIFY FUNCTIONALITY
$(function() {
  $.scrollify({
    section:".section-VH",
    interstitialSection : "footer",

    before: function(i) {
      // Check section number
      console.log(i + 1);
      // Shift the counter up for footer
      if (i == 5)
      {
        $('.counter-num').html('5 of 5');
        $('aside').addClass('shift-up');
      }
      else if (i < 5)
      {
        $('aside').removeClass('shift-up');
        $('.counter-num').html((i+1) + ' of 5');
      };
      // Increment counter when going through sections
      if (i == 0)
      {
        $('header').removeClass('shrink');
      }
      else if (i != 0)
      {
        $('header').addClass('shrink');
      };
    },

    after: function(i) {}
  })

  $(".down-arrow").click(function(e) {
		e.preventDefault();

		$.scrollify.next();
	});

});
