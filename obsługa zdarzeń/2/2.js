"use strict";
const km = document.getElementsByName("km")[0];
const free = document.getElementsByName("gda")[0];
const res = document.getElementById("res");
const handleInput = (e) => {
    if (free.checked)
        return (res.textContent = "Dowieziemy Twoją pizzę za darmo");
    res.textContent = `Dowóz będzie Cię kosztował ${+km.value * 2} zł`;
};
km.addEventListener("input", handleInput);
free.addEventListener("change", handleInput);
