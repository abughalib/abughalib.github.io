let scrolling_start = false;
scrolledPast = false;

function switchInto() {
  scrolledPast = true;
  const nav_bar = $(".navbar"),
    data = nav_bar.data();
  nav_bar.removeClass(data.startcolor);
  nav_bar.removeClass(data.startsize);
  nav_bar.addClass(data.intocolor);
  nav_bar.addClass(data.intosize);
}

function switchStart() {
  scrolledPast = false;
  const nav_bar = $(".navbar"),
    data = nav_bar.data();
  nav_bar.addClass(data.startcolor);
  nav_bar.addClass(data.startsize);
  nav_bar.removeClass(data.intocolor);
  nav_bar.removeClass(data.intosize);
}

$(window).scroll(() => (scrolling_start = true));

setInterval(() => {
  if (scrolling_start) {
    scrolling_start = false;
    if ($(window).scrollTop() > 100) {
      if (!scrolledPast) {
        switchInto();
      }
    } else {
      if (scrolledPast) {
        switchStart();
      }
    }
  }
}, 100);

function toggleDarkBody() {
  var element = document.body;
  element.classList.toggle("dark_mode");
}

function toggleDarkNav() {
  const nav_bar = $(".navbar");
  var body = document.body;
  body.classList.toggle("dark_mode");
  let arri = ["nav_bar-dark", "bg-dark"];
  nav_bar.classList.remove("nav_bar-light");
  for (i of arri) {
    nav_bar.classList.add(i);
  }
}

// Body Animation

function pauseAnimation() {
  let body_animation = document.querySelector("#home_component");
  body_animation.classList.toggle("background-animate");
  body_animation.style.color = "grey";
}
