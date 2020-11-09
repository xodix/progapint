// Obliczającą pole powierzchni koła i zwracającą wynik obliczeń. 
const circleArea = (r: number): number => Math.PI * r * r;

// Wynik pokaż na ekranie dla przykładowych trzech wartości promienia.

console.log(`${circleArea(4557)}`);
console.log(`${circleArea(33)}`);
console.log(`${circleArea(12)}`);



// Obliczającą pole powierzchni trójkąta równoramiennego. Wynik pokaż na ekranie dla przykładowych trzech wartości promienia.
const triangleArea = (a: number, h: number): number => a * h / 2;

// Wynik pokaż na ekranie dla przykładowych trzech wartości promienia.

console.log(`${triangleArea(122, 54)}`);
console.log(`${triangleArea(654, 654)}`);
console.log(`${triangleArea(66549, 40)}`);