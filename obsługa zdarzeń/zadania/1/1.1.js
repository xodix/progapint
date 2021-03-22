"use strict";
const kontener = document.getElementById("kontener");
kontener.addEventListener("click", () => (kontener.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`));
kontener.addEventListener("mouseover", () => (kontener.style.fontSize = "2em"));
kontener.addEventListener("mouseout", () => (kontener.style.fontSize = "1em"));
