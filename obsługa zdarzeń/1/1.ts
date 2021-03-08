const che = document.getElementsByName("poprawiny")[0] as HTMLInputElement;
const inp = document.getElementsByName("n-guests")[0] as HTMLInputElement;
const handleChange = () =>
  // @ts-ignore
  (document.getElementById("wynik")!.textContent =
    +inp.value * (che.checked ? 130 : 100));

che.addEventListener("change", handleChange);
inp.addEventListener("input", handleChange);
