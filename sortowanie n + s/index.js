/* Npisz funkcję, która pozwoli na uporządkowanie elementów tablicy w ten sposób, że będą w niej umieszczone najpierw litery w kolejności alfabetycznej a następnie cyfry w kolejności od najmniejszej do największej */
const Tablica2 = [2, 'b', 4, 'g', 'a', 1, 10, 55, 'aa'];

// taki rodzaj funkcji został zastosowany aby nie stracić znaczenia this
Array.prototype.sortMixed = function () {
    const nums = this.filter(element => typeof element === "number");
    nums.sort((a, b) => a - b);
    const strings = this.filter(element => typeof element === "string");
    strings.sort();
    return [...strings, ...nums];
};

console.log(Tablica2.sortMixed());
