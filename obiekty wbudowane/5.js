"use strict";
const mainElem = document.createElement("div");
const dat = new Date();
const arr = [
    dat.getFullYear(),
    dat.getMonth(),
    dat.getDate(),
    dat.getHours(),
    dat.getMinutes(),
    dat.getSeconds(),
];
for (let i = 1; i <= 6; i++) {
    const header = document.createElement(`h${i}`);
    header.append(arr[i - 1].toString());
    mainElem.append(header);
}
document.body.append(mainElem);
