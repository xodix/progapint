"use strict";
const tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
document.write(`${tab1[4]}`, '<br />');
tab1[6] = 12;
let tab2 = new Array(10);
tab2 = tab1;
let tab3 = new Array(10);
tab3 = tab1.map((num) => num * 2);
tab2 = tab1.reverse();
let arr = [
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę'),
    +prompt('podaj liczbę')
];
document.write(`Największa: ${Math.max(...arr)}`, '<br />');
document.write(`Najmniejsza: ${Math.min(...arr)}`, '<br />');
document.write(`Średnia: ${arr.reduce((prev, curr) => prev + curr) / arr.length}`, '<br />');
document.write(`3 wystąpiło ${arr.filter((num) => num === 3).length} razy`, '<br />');
const sorted = arr.sort((a, b) => a - b);
document.write(`Liczby rosnąco: ${sorted.join(", ")}`, '<br />');
document.write(`mediana: ${sorted[4] + sorted[5] / 2}`, '<br />');
document.write(`trzy najmniejsze: ${sorted.slice(0, 3).join(", ")}`, '<br />');
document.write(`trzy największe: ${sorted.reverse().slice(0, 3).join(", ")}`, '<br />');
arr = arr.map((num) => num * num);
document.write(`ilość liczb parzystych: ${arr.filter((num) => !(num % 2)).length}`, '<br />');
document.write(`ilość liczb nieparzystych: ${arr.filter((num) => num % 2).length}`, '<br />');
document.write(`ilość liczb podzielnych przez 3: ${arr.filter((num) => !(num % 3)).length}`, '<br />');
//# sourceMappingURL=zadanieTablice.js.map