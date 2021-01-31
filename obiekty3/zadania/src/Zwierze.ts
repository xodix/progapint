class Zwierze {
  constructor(public wiek: number, public rasa: string, public kolor: string) {}

  biega() {
    document.write(`${this.rasa} biega <br />`);
  }
  fruwa() {
    document.write(`${this.rasa} fruwa <br />`);
  }
  plywa() {
    document.write(`${this.rasa} plywa <br />`);
  }
}
const z1 = new Zwierze(2, "pies", "brązowy");
const z2 = new Zwierze(3, "sowa", "biały");
const z3 = new Zwierze(1, "karp", "szary");

z1.biega();
z2.fruwa();
z3.plywa();
