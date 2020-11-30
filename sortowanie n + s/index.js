const Tablica2 = [2, 'b', 4, 'g', 'a', 1, 10, 55, 'aa'];
// taki rodzaj funkcji został zastosowany aby nie stracić znaczenia this
Array.prototype.sortMixed = function () {
    this.sort();
    this.sort(function (a, b) { return a - b; });
    return this;
};
document.write(Tablica2.sortMixed());
