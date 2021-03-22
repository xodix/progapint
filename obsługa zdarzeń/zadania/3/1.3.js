"use strict";
const artykul = document.getElementById("artykul");
const liczby = document.getElementById("liczba");
artykul.addEventListener("keydown", (e) => {
    artykul.cols = artykul.cols + 1;
    if (!isNaN(+e.key))
        liczby.textContent += e.key;
});
