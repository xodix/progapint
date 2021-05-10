const ls = document.getElementsByTagName("input");
const err = document.getElementById("err");
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  let wynik = 0;
  let erred = false;
  for (let i = 0; i < 2; i++) {
    const { value } = ls[i];
    if (value === "") {
      err.textContent = `Liczba ${i + 1} powinna być wpisana`;
      erred = true;
      break;
    }
    if (!Number.isInteger(+value)) {
      err.textContent = `Liczba ${i + 1} powinna być liczbą całkowitą`;
      erred = true;
      break;
    } else if (+value < 1 || +value > 100) {
      err.textContent = `Liczba ${i + 1} powinna być w zakresie <1, 100>`;
      erred = true;
      break;
    } else {
      wynik += +value;
    }
  }
  if (!erred) err.textContent = `Wynik: ${wynik}`;
});
