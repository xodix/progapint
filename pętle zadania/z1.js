// x = (a+6) / (b-4)
// 192.168.28.126
const a = Number(prompt("Wpisz a"));
const b = Number(prompt("Wpisz b"));
if (isNaN(a) || isNaN(b)) {
    document.write("wartości muszą być numerami")
} else {
    // wartość musi być typu string
    document.write(`${(a+6)/(b-4)}`);
}