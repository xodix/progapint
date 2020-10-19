export {};
function z(x) {
    let razem = '';
    for (let i = 0; i < x; i++) {
        razem += '*'
    }
    console.log(razem)
};
z(20)
console.log('\n');
z(30)
// Wywołanie funkcji podanie jej nazwy i ewentualnie argumentów, które wpisujemy w nawiasie
function z2(x = 2) {
    let razem = '';
    for (let i = 0; i < x; i++) {
        razem += '*'
    }
    console.log(razem);
};
z2();
// gc2.pl:25565