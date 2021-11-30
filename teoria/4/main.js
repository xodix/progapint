const inputy = document.querySelectorAll("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
	const arr = [];

	for (const input of inputy) {
		arr.push(+input.value);
	}

	document.write(`Największy element: ${Math.max(arr)}`);
}); 