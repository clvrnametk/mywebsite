console.log('loaded bro!!');

$(function() {
  $.scrollify({
    section:".section-style", //changed
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1100,
    offset : 0,
    scrollbars:true,  // changed
    // standardScrollElements: "",
    // setHeights: true,  // changed
    // overflowScroll: true,
    // updateHash: true,
    // touchScroll:true,
    // before: function(i) {
    // },
    after: function(i) {
      console.log('Just scrooled to sectin ' + i);
    },
    // afterResize:function() {

    // },
    // afterRender:function() {

    // }

  })
});




// $(function() {
// 	$.scrollify({
// 		section:".section-style",
// 		//sectionName:false,
// 		scrollSpeed:1100,
//     overflowScroll: true,
//     setHeights: true,
// 		after:function(i) {}
// 	});
// });
