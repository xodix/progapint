const form = document.querySelector("form");
const wynik = document.querySelector("#wynik");

form.addEventListener("submit", e => {
	e.preventDefault();

	const { target } = e;

	let val_a = +target.a.value;
	let val_b = +target.b.value;
	let val_c = +target.c.value;

	if (val_a + val_b < val_c || val_a + val_c < val_b || val_c + val_b < val_a) {
		wynik.textContent = "Z podanych boków nie można utworzyć trójkąta.";
		return;
	}

	const obw = val_a + val_b + val_c;
	wynik.textContent = Math.sqrt(obw * (obw - val_a) * (obw - val_b) * (obw - val_c));
});