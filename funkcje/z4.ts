export { };
const spheareArea = (r) => 4 * Math.PI * (r ** 2);
// 4 PI r2
const spheareVolume = (r) => (4 * Math.PI * (r ** 3)) / 3;
// 4/3 PI r3
const cubeArea = (a, b, c) => 2 * (a * b + a * c + b * c);
// 2ab+2ac+2bc
const cubeVolume = (a, b, c) => a * b * c;
// abc

// spheareArea(10); -> 1256
// spheareVolume(10); -> 4 186,66
// cubeArea(2, 5, 10); -> 160
// cubeVolume(2, 5, 10); -> 100

console.log(spheareArea(10));
console.log(spheareVolume(10));
console.log(cubeArea(2, 5, 10));
console.log(cubeVolume(2, 5, 10));