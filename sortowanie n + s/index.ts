/* Npisz funkcję, która pozwoli na uporządkowanie elementów tablicy w ten sposób, że będą w niej umieszczone najpierw litery w kolejności alfabetycznej a następnie cyfry w kolejności od najmniejszej do największej */
export { };
interface Array<T> {
  sortMixed(): (string | number)[];
}

let Tablica2 = [2, 'b', 4, 'g', 'a', 1, 10, 55, 'aa'];

// taki rodzaj funkcji został zastosowany aby nie stracić znaczenia this
Array.prototype.sortMixed = function () {
  this.sort();
  this.sort((a: number, b: number) => a - b);
  return this;
};

console.log(Tablica2.sortMixed());