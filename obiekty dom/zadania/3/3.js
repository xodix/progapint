"use strict";
const images = document.getElementsByTagName("img");
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("mouseover", e => {
        e.target.style.width = "50px";
        e.target.style.height = "50px";
    });
    images[i].addEventListener("mouseout", e => {
        e.target.style.width = "100px";
        e.target.style.height = "100px";
    });
}
// const images: HTMLCollectionOf<HTMLImageElement> = document.getElementsByTagName(
//   "img",
// );
// for (let i = 0; i < images.length; i++) {
//   images[i]!.onmouseover = e => {
//     (e.target as HTMLImageElement).style.width = "50px";
//     (e.target as HTMLImageElement).style.height = "50px";
//   };
//   images[i]!.onmouseover = e => {
//     (e.target as HTMLImageElement).style.width = "100px";
//     (e.target as HTMLImageElement).style.height = "100px";
//   };
// }
