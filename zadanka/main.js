// ! clock !
const dateTime = document.getElementsByClassName("date-time")[0];
setInterval(() => {
    const date = new Date();
    dateTime.textContent = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}, 500);
// ! slideshow !
const slideshow = document.getElementsByClassName("slideshow")[0];
const categories = [
    "animals",
    "nature",
    "architecture",
    "people",
    "tech",
    "any"
];

let curr = 0;

setInterval(() => {
    slideshow.firstElementChild.setAttribute("src", `https://placeimg.com/640/480/${categories[curr]}`);
    curr = curr === 5 ? 0 : curr + 1;
}, 10000)
// ! marquee is made with css !
// ! countup timer !
window.onload = () => {
    const MILISECONDS_TO_DAYS = 86_400_000;
    document.getElementsByClassName("count-up")[0].textContent = Math.floor((new Date().getTime() - 1623323572465) / MILISECONDS_TO_DAYS);
}