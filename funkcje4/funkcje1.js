const pomnoz = (e) => {
  e.preventDefault()
  f1.p3.value = f1.p1.value * f1.p2.value;
}

const dodaj = (e) => {
  e.preventDefault();
  f1.p6.value = f1.p4.value - f1.p5.value;
}

const podziel = (e) => {
  e.preventDefault();
  f1.p9.value = f1.p7.value - f1.p8.value;
}

const odejmij = (e) => {
  e.preventDefault();
  f1.p12.value = f1.p10.value - f1.p11.value;
}

document.getElementsByTagName('button')[0].addEventListener("click", pomnoz);
document.getElementsByTagName('button')[1].addEventListener("click", dodaj);
document.getElementsByTagName('button')[2].addEventListener("click", podziel);
document.getElementsByTagName('button')[3].addEventListener("click", odejmij);