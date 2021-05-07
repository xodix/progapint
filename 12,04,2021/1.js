const colorButtons = [
    document.getElementById("b-cz"),
    document.getElementById("b-z"),
    document.getElementById("b-n")
];

const wynik = document.getElementById("wynik");

const changeFontSize = e => wynik.style.fontSize = e.target.value + "%";

const changeFontType = e => {
    if (e.target.value === "bold") {
        wynik.style.fontStyle = "";
        wynik.style.fontWeight = "bold";
    } else {
        wynik.style.fontWeight = "";
        wynik.style.fontStyle = e.target.value;
    }
};

const changeColor = e => wynik.style.color = getComputedStyle(e.target).backgroundColor;

document.getElementById("proc").addEventListener("input", changeFontSize);

document.getElementById("typ-cz").addEventListener("change", changeFontType);

for (let i = 0; i < colorButtons.length; i++) {
    colorButtons[i].addEventListener("click", changeColor);
}

