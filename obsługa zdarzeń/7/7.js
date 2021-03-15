"use strict";
const l = document.getElementsByName("lc")[0];
const p = document.getElementsByName("pc")[0];
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const koszt = document.getElementById("koszt");
    const val = +l.value;
    const isPremium = p.checked;
    const cost = isPremium ? val * 2.6 : val * 2;
    const weight = isPremium ? val * 1.75 : val * 1.5;
    const ik = +e.target.ik.value;
    koszt.textContent = `Zakupiona ilość cegieł: ${val}, ${isPremium ? "cegła premium" : "cegła standardowa"}, koszt zakupu cegieł: ${cost}, waga cegieł: ${weight}, koszt treansportu: ${ik * Math.floor(weight / 10) * 0.5}`;
});
