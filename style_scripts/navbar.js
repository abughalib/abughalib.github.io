$(window).scroll(function () {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('affix');
    console.log("OK");
  } else {
    $('.navbar').removeClass('affix');
  }
});