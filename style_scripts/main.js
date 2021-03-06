
const navBar = $('.navbar'),
		data = navBar.data();

let scrolling = false;
scrolledPast = false;

function switchInto() {
		scrolledPast = true;
		navBar.removeClass(data.startcolor);
		navBar.removeClass(data.startsize);
		navBar.addClass(data.intocolor);
		navBar.addClass(data.intosize);
};

function switchStart() {
		scrolledPast = false;
		navBar.addClass(data.startcolor);
		navBar.addClass(data.startsize);
		navBar.removeClass(data.intocolor);
		navBar.removeClass(data.intosize);
}

$(window).scroll(() => scrolling = true);

setInterval(() => {
		if (scrolling) {
				scrolling = false;
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
		var navBar = document.getElementById("navBar");
		var body = document.body
		body.classList.toggle('dark_mode')
		let arri = ["navbar-dark", "bg-dark"]
		navBar.classList.remove("navbar-light")
		for (i of arri) {
				navBar.classList.add(i)
		}
}

// Body Animation

function pauseAnimation(){
	let body_animation = document.querySelector("#body");
	body_animation.classList.toggle('background-animate');
	body_animation.style.color = "grey";
}