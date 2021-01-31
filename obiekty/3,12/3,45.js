const osoba = {
  nazwisko: "Nowacki",
  imie: "Marek",
  zawod: "informatyk",
  pokaz() { document.write(`${this.nazwisko} ${this.imie}`) }
}
osoba.wiek = 19;
osoba.wypiszWiek = function () { document.write(`Wiek: ${this.wiek} lat`); };