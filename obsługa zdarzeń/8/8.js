"use strict";
// bilety normalne
const bn = document.getElementsByName("bn")[0];
// bilety ulgowe
const bu = document.getElementsByName("bu")[0];
// ilość godzin
const ig = document.getElementsByName("ig")[0];
// karta dużej rodziny
const kdr = document.getElementsByName("kdr")[0];
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    // liczba biletów ulgowych
    let lbn = +bn.value;
    const freeTickets = Math.floor(lbn / 15);
    freeTickets <= +bn.value ? (lbn -= freeTickets) : (lbn = 0);
    const cenaPodstawowa = +ig.value > 4
        ? +bu.value * 25 + lbn * 50
        : +bu.value * 5 * +ig.value + lbn * 10 * +ig.value;
    document.getElementById("wynik").textContent = `Całkowity koszt wstępu do akuaparku: ${kdr.checked ? 0.9 * cenaPodstawowa : cenaPodstawowa}zł`;
});
