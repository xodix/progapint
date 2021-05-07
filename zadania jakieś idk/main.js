const picSrc = [
  "z1.jpg",
  "z2.jpg",
  "z2.webp",
  "z3.jpg",
  "z4.jpg",
  "z5.jpg",
  "z6.jpg",
  "z7.jpg",
];
let currIndex = 0;
const slider = document.getElementsByTagName("img")[0];

setInterval(() => {
  currIndex = currIndex === picSrc.length - 1 ? 0 : currIndex + 1;
  slider.src = picSrc[currIndex];
}, 2000);


// currIndex = currIndex === picSrc.length - 1 ? 0 : currIndex + 1;
// =
// if (currIndex === picSrc.length - 1) currIndex = 0 
// else currIndex = currIndex + 1;
