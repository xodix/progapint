const i1 = document.getElementsByName("a")[0] as HTMLInputElement;
const i2 = document.getElementsByName("b")[0] as HTMLInputElement;
const wynik = document.getElementById("wynik");
const buttons = document.getElementsByTagName("button");
for (const button of buttons) {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if (i1.value === "" || i2.value === "")
      return alert("upewnij się że oba pola są uzupełnione");
    const cmd = (e.target as HTMLButtonElement).getAttribute("cmd");
    wynik!.textContent =
      cmd !== "//"
        ? eval(`${+i1.value}${cmd}${+i2.value}`)
        : Math.floor(+i1.value / +i2.value);
  });
}
