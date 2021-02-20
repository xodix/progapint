// czego dotyczy document object model
// hierarhia
// obiekty przeglądarki
//    window
//    navigator
//    document
//    history
//    location
// @ts-check
let newWindow1;
let newWindow2;
function openWindow() {
  newWindow1 = window.open('https://google.com', 'new', "width=500, height=600");
}
openWindow();
setInterval(() => {
  const rgb = [
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
    Math.floor(Math.random() * 256),
  ];
  newWindow1.document.write(`<p stye="color: rgb(${rgb[0]},${rgb[1]},${rgb[2]})">text noice</p>\n`);
}, 2000);
