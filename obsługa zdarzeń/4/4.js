"use strict";
const inputs = document.getElementsByName("num");
const count = document.getElementsByName("count");
document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
    let sum = 0;
    for (let i = 0; i < inputs.length; i++) {
        if (count[i].checked)
            sum += +inputs[i].value;
    }
    document.getElementById("sum").textContent = sum.toString();
});
