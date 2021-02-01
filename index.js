// Change THEME
var s1 = document.querySelector("#button1");
var s2 = document.querySelector("#button2");
var s3 = document.querySelector("#button3");
var s4 = document.querySelector("#button4");

var style = document.querySelector("#css");

buttons = [s1, s2, s3, s4];
buttons.forEach((element) => {
	element.addEventListener("click", (event) => {
		event.preventDefault();
		style.href = "css/" + element.value + ".css";
	});
});

// Animate TITLES on SCROLL
var titol1 = document.querySelector("#titol");
var titol2 = document.querySelector("#exp");
var titol3 = document.querySelector("#studyTitle");
// var titol4 = document.querySelector("#titol");

window.addEventListener("scroll", () => {
	console.log(window.scrollY);
	if (window.scrollY > 400) {
		titol1.style.display = "block";
		titol1.classList.add("animate__animated", "animate__fadeInDown");
	}
	if (window.scrollY > 500) {
		titol2.style.display = "block";
		titol2.classList.add("animate__animated", "animate__fadeInDown");
	}
});
