"use strict";
const paragraf = document.getElementsByClassName("wyroznione")[0];
paragraf.addEventListener("dblclick", (e) => (e.target.textContent = "puławski"));
paragraf.addEventListener("mouseover", (e) => console.log(e.target.textContent));
