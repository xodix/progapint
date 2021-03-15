// text input container
const inputs = document.getElementsByName(
  "num",
) as NodeListOf<HTMLInputElement>;
// checkbox container
const count = document.getElementsByName(
  "count",
) as NodeListOf<HTMLInputElement>;
document.getElementsByTagName("button")[0].addEventListener("click", e => {
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (count[i].checked) {
      Number.isInteger(+inputs[i].value)
        ? (sum += +inputs[i].value)
        : alert(`${i + 1} wartość nie jest liczbą całkowitą`);
    }
  }
  document.getElementById("sum")!.textContent = sum.toString();
});
document
  .getElementsByTagName("button")[1]
  .addEventListener(
    "click",
    e => (document.getElementById("sum")!.textContent = ""),
  );
