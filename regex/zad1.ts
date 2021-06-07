// ! napisz wyrażenie reguralne, które sprawdzi poprawność kodu pocztowego w Polsce
const regex = /^\d{2}-\d{3}$/;
console.log(regex.test("2-4100"));
console.log(regex.test("2-1000"));
console.log(regex.test("24000-0"));
// ! wyrażenie reguralne sprawdzające  czy podane imie kończy się na literę a min 3 znaki
const feamle = /^\w{2,}a$/;
console.log(feamle.test("Ewa"));
console.log(feamle.test("Zbyszek"));
// ! modyfikacja 2 tak aby wymusić odpowiednią wielkość liter
const feamle2 = /^[A-Ź][a-ź]+a$/;
console.log(feamle.test("Ewelina"));
console.log(feamle.test("ewelina"));
// ! regex sprawdzający poprawność pisania adresu
const ulreg = /ul\. [A-Ź]\D+ \d+(\/\d+)?/;
console.log(ulreg.test("ul. Klamrowa 2"));
console.log(ulreg.test("ul. Kazimierza Wielkiego 5"));
console.log(ulreg.test("ul. Czarno-czerwona 22"));
console.log(ulreg.test("ul. Wróblewskiego 10/2"));
// ! regex sprawdzający poprawność adresu email
const ereg = /\S+@\S+/;
console.log(ereg.test("pan12.jan33@buziaczek33.pl.com.net.pl.tv"));
console.log(ereg.test("pan12.jan33@buziaczek33.pl.com.n t.pl.tv"));
console.log(ereg.test("pa 12.jan33@buziaczek33.pl.com.n t.pl.tv"));
