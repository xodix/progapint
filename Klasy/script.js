class Kolo {

  constructor(r) {
    this.r = +r;
  }

  obliczPole() {
    return Math.round(Math.PI * this.r * this.r * 100) / 100;
  }

}

const handleSubmit = (e) => {

  e.preventDefault();

  const k1 = new Kolo(+e.target.one.value);
  const k2 = new Kolo(+e.target.two.value);
  const k3 = new Kolo(+e.target.three.value);

  document.getElementById('1').textContent = k1.obliczPole();
  document.getElementById('2').textContent = k2.obliczPole();
  document.getElementById('3').textContent = k3.obliczPole();

}

document.getElementsByTagName("form")[0].addEventListener("submit", handleSubmit);