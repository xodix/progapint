// 1.0

const tab1: number[] = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];
document.write(`${tab1[4]}`, '<br />')
tab1[6] = 12;

let tab2: number[] = new Array(10);
tab2 = tab1;

let tab3: number[] = new Array(10);
tab3 = tab1.map((num: number) => num * 2);

tab2 = tab1.reverse();

// 2.0

// ! w typescripcie oznacza że na 100% wartość nie będzie null albo undefined

let arr: number[] = [
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!,
  +prompt('podaj liczbę')!
];

// input control
if (arr.some((val: number) => isNaN(val))) document.write('<span style="color:red">Wszystkie wartości muszą być numeryczne</span>');

document.write(`Największa: ${Math.max(...arr)}`, '<br />');
document.write(`Najmniejsza: ${Math.min(...arr)}`, '<br />');

document.write(`Średnia: ${arr.reduce((prev: number, curr: number) => prev + curr) / arr.length}`, '<br />');

document.write(`3 wystąpiło ${arr.filter((num: number) => num === 3).length} razy`, '<br />');

const sorted: number[] = arr.sort((a, b) => a - b);

document.write(`Liczby rosnąco: ${sorted.join(", ")}`, '<br />');

document.write(`mediana: ${sorted[4] + sorted[5] / 2}`, '<br />');

document.write(`trzy najmniejsze: ${sorted.slice(0, 3).join(", ")}`, '<br />');
document.write(`trzy największe: ${sorted.reverse().slice(0, 3).join(", ")}`, '<br />');

arr = arr.map((num: number) => num * num);

document.write(`ilość liczb parzystych: ${arr.filter((num: number) => !(num % 2)).length}`, '<br />');
document.write(`ilość liczb nieparzystych: ${arr.filter((num: number) => num % 2).length}`, '<br />');
document.write(`ilość liczb podzielnych przez 3: ${arr.filter((num: number) => !(num % 3)).length}`, '<br />');