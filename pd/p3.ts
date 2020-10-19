export {};
// liczby od 1 z interwałem równym 4. stop when sum > 100 log the sum
let suma = 0;
for (let i = 1; i < 100; i+=4) {
    suma += i;
}
console.log(suma);
