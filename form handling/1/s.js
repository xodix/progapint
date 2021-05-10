function sprawdz(e) {
    console.log("ytkdsaljh")
    let form = e.target;
    if (form.nazw.value === "") {
      alert("Pole nazwisko musi być wypełnione");
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
    if (form.zawod.value === "") {
        alert("Pole zawód musi być wypełnione");
        form.zawod.focus();
        e.preventDefault();
        return;
    }
  }
  document.getElementsByTagName("form")[0].addEventListener("submit", sprawdz);