// 7.XII Sprawdzian (JS - funkcje i tablice)
// Zadanie 1 - funkcje
// Napisz mini aplikację pozwalającą na obliczenie, ile metrów bieżących wykładziny należy kupić, aby pokryć wykładziną całą podłogę w wybranej sali lekcyjnej w szkole. Zakładamy, że w sprzedaży dostępne są wykładziny tylko o szerokości 2 metrów.
// Dane wejściowe: długość oraz szerokość pomieszczenia wprowadź za pośrednictwem okienka dialogowego prompt.

// Funkcja powinna zwracać tylko wynik obliczeń.
// Na ekranie zaprezentuj wynik działania aplikacji w postaci:
// "Na wymianę wykładziny w sali lekcyjnej o wymiarach: ...[m] x ...[m] potrzeba ... mb wykładziny".
// Plik wyjściowy: zadanie1.html

// Zadanie 2 - tablice, funkcje
// 1. Zdefiniuj tablicę o nazwie liczby i wypełnij ją liczbami: 2, 50, 21, 11, 211.
// 2. Napisz skrypt zamieniający wszystkie liczby nieparzyste tablicy na kolejne parzyste.
// 3. Oblicz sumę wszystkich elementów tablicy. Napisz w tym celu funkcję suma_tab zwracającą wartość.
// 4. Wyświetl:
// a. tekst „Liczby:” i wszystkie elementy tablicy oddzielone od siebie znakami " ; ".
// b. tekst „Liczby parzyste:” i wszystkie liczby parzyste oddzielone od siebie znakiem ", ".
// 5. Wyświetl tekst „Suma elementów tablicy:” i sumę wszystkich jej elementów. Wykorzystaj napisaną przez siebie funkcję o nazwie suma_tab.
// Plik wyjściowy: zadanie2.html

// Pliki z zadaniami prześlij przez aplikację Teams.
const obliczDlugoscWykladziny = (szerokosc) => +szerokosc % 2 === 0 ? szerokosc : +szerokosc + 1;
const dlugosc = prompt('Wprowadź długość:');
const szerokosc = prompt('Wprowadź szerokość:');
document.getElementById('wynik').textContent = `Na wymianę wykładziny w sali lekcyjnej o wymiarach: ${dlugosc}[m] x ${szerokosc}[m] potrzeba ${obliczDlugoscWykladziny(szerokosc)} mb wykładziny`;