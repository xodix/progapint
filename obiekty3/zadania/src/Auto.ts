class Auto {
  constructor(
    public model: string,
    public marka: string,
    public rocznik: number
  ) {}
  przyspiesz(przyspieszenie: number) {
    if (przyspieszenie >= 0 && przyspieszenie <= 100) {
      if (przyspieszenie > 80) alert("włączono turbo");
      document.write(`Auto ${this.model} właśnie przyspiesza  <br />`);
    } else alert("wartości spoza zakresu");
  }
  zatrzymaj() {
    document.write(`Auto z roku ${this.rocznik} zatrzymało się. <br />`);
  }
}

const s1 = new Auto("mustang", "ford", 2015);
const s2 = new Auto("duster", "dacia", 2018);
const s3 = new Auto("talisman", "renault", 2020);

s1.przyspiesz(70);
s2.przyspiesz(60);
s3.przyspiesz(90);

s1.zatrzymaj();
s2.zatrzymaj();
s3.zatrzymaj();

document.write(
  s1 === s2 && s2 === s3 ? "Auta są jednej marki!" : "Auta są różnych marek!"
);

// 7. Jeżeli auta są różnych marek to wyświetl napis (jako treść strony) – Auta są różnych marek! W
// przeciwnym wypadku wyświetl komunikat – Auta są jednej marki!
