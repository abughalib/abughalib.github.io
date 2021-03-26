$(window).scroll(()=> {
  if ($(document).scrollTop() > 50) {
    $('.navbar').addClass('affix');
    $('.toggle-icon').addClass('toggle-icon-affix');
    $('.navbarlinks').addClass('scroll');
  } else {
    $('.navbar').removeClass('affix');
    $('.toggle-icon').removeClass('toggle-icon-affix');
    $('.navbarlinks').removeClass('scroll');
  }
});

$('.toggle-icon').click(()=>{
  console.log("clicked")
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

