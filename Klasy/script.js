class Kolo {

  constructor(r) {
    this.promienK = +r;
  }

  poleK() {
    return Math.round(Math.PI * this.promienK * this.promienK * 100) / 100;
  }

  obwodK() {
    return (2 * Math.PI * this.promienK);
  }

}

const handleSubmit = (e) => {

  e.preventDefault();

  const k1 = new Kolo(+e.target.one.value);
  const k2 = new Kolo(+e.target.two.value);
  const k3 = new Kolo(+e.target.three.value);

  document.getElementById('1').textContent = k1.obliczPole() + " obwód: " + k1.obwodK();
  document.getElementById('2').textContent = k2.obliczPole() + " obwód: " + k2.obwodK();
  document.getElementById('3').textContent = k3.obliczPole() + " obwód: " + k3.obwodK();

}

document.getElementsByTagName("form")[0].addEventListener("submit", handleSubmit);
// repo: https://github.com/xodix/progapint/blob/master/Klasy/aplikacja.html
// hosting: https://xodix.github.io/progapint/Klasy/aplikacja.html