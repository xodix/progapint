//  Funkcje w Java Script
function welcome(name: string): void {
  console.log(`Hello ${name}`);
}
// funcja nazwana, bez parametrów, bez wartości zwrotnej, podanie nazwy wywoła funkcję

const czyParzysta = (liczba: number): boolean => !(liczba % 2);

console.log(czyParzysta(100))

const bezwzgledna = (x: number): number => x < 0 ? -x : x;

console.log(bezwzgledna(-5));

const silnia = (x: number): number => {
  let suma = 1;
  for (let i = x; i > 0; i--) {
    suma *= i;
  }
  return suma;
};

console.log(silnia(5));

// trzy sposoby zdefiniowania funkcji iloczyn

function iloczyn(x: number, y: number): number {
  return x * y;
}

const iloczyn2 = function (x: number, y: number): number {
  return x * y;
}
const iloczyn3 = (x: number, y: number): number => x * y;