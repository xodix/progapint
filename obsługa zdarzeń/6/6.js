"use strict";
const lc = document.getElementsByName("lc")[0];
const pc = document.getElementsByName("pc")[0];
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const koszt = document.getElementById("koszt");
    const val = +lc.value;
    const isPremium = pc.checked;
    const cost = isPremium ? val * 2.6 : val * 2;
    const weight = isPremium ? val * 1.75 : val * 1.5;
    koszt.textContent = `Zakupiona ilość cegieł: ${val}, ${isPremium ? "cegła premium" : "cegła standardowa"}, koszt zakupu cegieł: ${cost}, waga cegieł: ${weight}`;
});
