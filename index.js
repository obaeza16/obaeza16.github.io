// Change THEME
var s1 = document.querySelector("#button1");
var s2 = document.querySelector("#button2");
var s3 = document.querySelector("#button3");
var s4 = document.querySelector("#button4");

var style = document.querySelector("#css");

// Set THEME as selected in local storage
var theme = localStorage.getItem("theme");
if (theme) {
	style.href = "css/" + theme + ".css";
}

buttons = [s1, s2, s3, s4];
buttons.forEach((element) => {
	element.addEventListener("click", (event) => {
		event.preventDefault();
		style.href = "css/" + element.value + ".css";
		// Save THEME on localstorage
		localStorage.setItem("theme", element.value);
	});
});

// Animate TITLES on SCROLL
var titol1 = document.querySelector("#titol");
var titol2 = document.querySelector("#exp");
var titol3 = document.querySelector("#studyTitle");
// var titol4 = document.querySelector("#titol");

window.addEventListener("scroll", () => {
	if (window.scrollY > 375) {
		titol1.style.display = "block";
		titol1.classList.add("animate__animated", "animate__fadeInDown");
	}
	if (isInViewport(titol2)) {
		titol2.style.display = "block";
		titol2.classList.add("animate__animated", "animate__fadeInDown");
	}
	if (isInViewport(titol3)) {
		titol3.style.display = "block";
		titol3.classList.add("animate__animated", "animate__fadeInDown");
	}
});

// To check if element is in viewport
function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
		rect.top >= 0 &&
		rect.left >= 0 &&
		rect.bottom <=
			(window.innerHeight || document.documentElement.clientHeight) &&
		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
}

// Testing the viewport function
// document.addEventListener(
// 	"scroll",
// 	function () {
// 		const messageText = isInViewport(titol1)
// 			? "The titol 1 is visible in the viewport"
// 			: "The titol 1 is not visible in the viewport";

// 		console.log(messageText);
// 	},
// 	{
// 		passive: true,
// 	}
// );
