const slowo = document.querySelector("#slowo");
const button = document.querySelector("button");
const wynik = document.querySelector("#wynik");

button.addEventListener("click", () => {
	let temp = slowo.value;
	const first = temp[0];

	temp[0] = temp[temp.search(" ") + 1];

	wynik.textContent = temp;
});