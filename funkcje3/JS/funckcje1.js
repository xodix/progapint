"use strict";
//  Funkcje w Java Script
function welcome(name) {
    console.log(`Hello ${name}`);
}
// funcja nazwana, bez parametrów, bez wartości zwrotnej, podanie nazwy wywoła funkcję
// document.getElementsByTagName('button')[0].addEventListener("click", () => welcome("Bartus"));
const czyParzysta = (liczba) => !(liczba % 2);
console.log(czyParzysta(100));
