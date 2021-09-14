const pole1 = () => document.querySelector("#p1").value;

const pole2 = () => document.querySelector("#p2").value;

const pole3 = () => document.querySelector("#p3").value;

const pole4 = () => document.querySelector("#p4").value;

const pole5 = () => document.querySelector("#p5").value;

const pole6 = () => document.querySelector("form").radio.value || "Nie zaznaczył radio";

const pole7 = () => document.querySelector("#p7").checked ? "Wyraża zgodę" : "Nie wyraża zgody";


document.querySelector("form").addEventListener("submit", e => {
	e.preventDefault();
	document.querySelector("#wynik").textContent = `
	${pole1()},
	${pole2()},
	${pole3()}
	${pole4()},
	${pole5()},
	${pole6()},
	${pole7()}
	`;
});