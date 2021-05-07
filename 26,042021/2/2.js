const form = document.getElementsByTagName("form")[0];
const nr_indeksu = form.nr_indeksu;
const wynik = document.getElementById("wynik");
window.addEventListener("DOMContentLoaded", () => nr_indeksu.focus());
form.addEventListener("submit", e => {
    e.preventDefault();
    const v = +nr_indeksu.value;
    if (Number.isNaN(v)) {
        nr_indeksu.focus();
        wynik.textContent = "Numer indeksu powinien być liczbą";
    } else if (!Number.isInteger(v)) {
        nr_indeksu.focus();
        wynik.textContent = "Numer indeksu powinien być liczbą całkowitą";
    } else if (v < 1) {
        nr_indeksu.focus();
        wynik.textContent = "Numer indeksu powinien być większy od 0";
    } else {
        wynik.innerHTML = `Numer indeksu: ${v} <br> Rodzaj indeksu: ${v > 1000 ? "nowy" : "stary"}`;
    }
});