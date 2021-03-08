"use strict";
const che = document.getElementsByName("poprawiny")[0];
const inp = document.getElementsByName("n-guests")[0];
const handleChange = () => 
// @ts-ignore
(document.getElementById("wynik").textContent =
    +inp.value * (che.checked ? 130 : 100));
che.addEventListener("change", handleChange);
inp.addEventListener("input", handleChange);
