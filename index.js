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

// Change LANGUAGE

document.querySelectorAll(".lang").forEach((button) => {
	button.addEventListener("click", () => {
		lang(button.value); // executa la funció per canviar de llenguatge
	});
});

var copy = {
	titol: {
		id: "titol",
		cat: "El meu primer web",
		cast: "Mi primera web",
		eng: "My first web page",
	},

	bio: {
		id: "bio",
		cat:
			"Hola! Benvinguts al primer web que faig amb HTML, CSS i JavaScript. Fes clic als botons per traduïr els textos.",
		cast:
			"¡Hola! Bienvenidos a la primera web que hago con HTML, CSS y JavaScript. Haz clic en los botones para traducir los textos.",
		eng:
			"Hi! Welcome to the first web page I did using HTML, CSS and JavaScript. Click on the buttons to translate the content.",
	},
};

function lang(lang) {
	for (const key in copy) {
		if (Object.hasOwnProperty.call(copy, key)) {
			const element = copy[key];
			document.querySelector(`#${element.id}`).innerHTML = element[lang];
		}
	}
}
