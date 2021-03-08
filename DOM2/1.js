"use strict";
document.getElementsByName("formularz")[0].addEventListener("change", (e) => {
    const c = document.forms[0].childNodes;
    const w = document.getElementById("wynik");
    w.textContent = "";
    for (const x of c) {
        if (x.value)
            w.innerHTML += `${x.name}: ${x.value}<br />`;
    }
}, { capture: true });
