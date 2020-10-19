export {};
const i1: number = +prompt("podaj liczbę punktów") / 20;
if (i1 < 0.50) {
    console.log("ndst");
} else if (i1 < 0.70) {
    console.log("dop");
} else if (i1 < 0.81) {
    console.log('dst');
} else if (i1 < 0.91) {
    console.log("db");
} else {
    console.log("bdb");
}