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
