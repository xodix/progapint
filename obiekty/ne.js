console.time("1");
const sumaLiczb = (liczba) => liczba.toString().length;
console.log(sumaLiczb(123456));
console.timeLog("1");
console.time("2")
const sumaLiczb2 = (liczba) => {
  let licznik = 0;
  do {
    liczba = Math.round(liczba / 10);
    licznik++;
  } while (liczba > 0);
  return licznik;
}
console.log(sumaLiczb2(123456));
console.timeLog("2");