const inputs = document.getElementsByName(
  "num"
) as NodeListOf<HTMLInputElement>;
const count = document.getElementsByName(
  "count"
) as NodeListOf<HTMLInputElement>;
document.getElementsByTagName("button")[0].addEventListener("click", (e) => {
  let sum = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (count[i].checked) sum += +inputs[i].value;
  }
  document.getElementById("sum")!.textContent = sum.toString();
});
