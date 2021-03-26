$(window).scroll(()=> {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('affix');
    console.log("OK");
  } else {
    $('.navbar').removeClass('affix');
  }
});

$('.toggle-icon').click(()=>{
  alert("clicked")
  // $('#nav-container').toggleClass("pushed");
});