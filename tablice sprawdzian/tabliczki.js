// Zadanie 2 - tablice, funkcje
// 1. Zdefiniuj tablicę o nazwie liczby i wypełnij ją liczbami: 2, 50, 21, 11, 211.
// 2. Napisz skrypt zamieniający wszystkie liczby nieparzyste tablicy na kolejne parzyste.
// 3. Oblicz sumę wszystkich elementów tablicy. Napisz w tym celu funkcję suma_tab zwracającą wartość.
// 4. Wyświetl:
// a. tekst „Liczby:” i wszystkie elementy tablicy oddzielone od siebie znakami " ; ".
// b. tekst „Liczby parzyste:” i wszystkie liczby parzyste oddzielone od siebie znakiem ", ".
// 5. Wyświetl tekst „Suma elementów tablicy:” i sumę wszystkich jej elementów. Wykorzystaj napisaną przez siebie funkcję o nazwie suma_tab.
// Plik wyjściowy: zadanie2.html

// 3, 50, 12, 212
const liczby = [2, 50, 21, 11, 211];

Array.prototype.parzyste = function () { return this.map(elem => elem % 2 === 0 ? elem : elem + 1) }
Array.prototype.suma_tab = function () { return this.reduce((prev, curr) => prev + curr) }

document.write(`Liczby: ${liczby.join(' ; ')}`);
document.write(`Liczby parzyste: ${liczby.parzyste().join(', ')}`);
document.write(`Liczby suma elementów tablicy: ${liczby.parzyste().suma_tab()}`);