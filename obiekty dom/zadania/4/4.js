"use strict";
const img = document.getElementsByTagName("img")[0];
img.addEventListener("mouseover", e => (e.target.src = "./stage2.png"));
img.addEventListener("mouseout", e => (e.target.src = "./stage1.png"));
