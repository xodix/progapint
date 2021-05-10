function sprawdz(e) {
  let form = e.target;
  if (form.nazw.value === "") {
    alert("Pole nazwisko musi być wypełnione");
    form.nazw.focus();
    e.preventDefault();
    return;
  }
  if (form.nazw.value.length < 3) {
    alert("Pole nazwisko musi zawierać co najmniej 3 znaki");
    form.nazw.focus();
    e.preventDefault();
    return;
  }
  if (form.imie.value === "") {
    alert("Pole imie musi być wypełnione");
    form.imie.focus();
    e.preventDefault();
    return;
  }
  if (form.imie.value.length < 2) {
    alert("Pole nazwisko musi zawierać co najmniej 2 znaki");
    form.imie.focus();
    e.preventDefault();
    return;
  }
  if (form.zawod.value === "") {
    alert("Pole zawód musi być wypełnione");
    form.zawod.focus();
    e.preventDefault();
    return;
  }
  if (!form.opcje.checked) {
    alert("Pole pracuję musi być zaznaczone");
    form.opcje.focus();
    e.preventDefault();
    return;
  }
}
document.getElementsByTagName("form")[0].addEventListener("submit", sprawdz);
