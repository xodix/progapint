const button = document.querySelector("button");
const wynik = document.querySelector("#wynik");

button.addEventListener("click", _ => {
	let color;
	const random = Math.floor(Math.random() * 100) + 1;
	if (random <= 33) {
		color = "red";
	} else if (random <= 66) {
		color = "blue";
	} else {
		color = "green";
	}
	wynik.innerHTML = `<div style="color: ${color}">Prawdopodobieństwo, że tak będzie wynosi: ${random}</div>`;
});