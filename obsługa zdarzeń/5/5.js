"use strict";
const lo = document.getElementsByName("lo")[0];
const ad = document.getElementsByName("ad")[0];
document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
    e.preventDefault();
    const koszt = document.getElementById("koszt");
    const val = +lo.value;
    const applyDiscount = ad.checked;
    if (val <= 0)
        alert("ilość ogłoszeń spoza zakresu");
    else if (val <= 50)
        koszt.textContent = `${applyDiscount ? val * 1.6 : val * 2}`;
    else if (val > 50 && val <= 100)
        koszt.textContent = `${applyDiscount ? val * 1.2 : val * 1.5}`;
    else
        koszt.textContent = `${applyDiscount ? val * 0.8 : val * 1}`;
});
