class Osoba {
  constructor(wzrost, wiek, imie) {
    this.wzrost = wzrost;
    this.wiek = wiek;
    this.imie = imie;
  }
  oddychaj() {
    alert(`${this.imie} ma ${this.wiek} lat i oddycha`);
  }
}

const o1 = new Osoba(1.78, 17, "Bartek");
const o2 = new Osoba(1.9, 23, "Piotrek");

o1.oddychaj();
o2.oddychaj();