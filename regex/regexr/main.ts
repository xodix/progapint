const enter = document.getElementsByName("enter")[0] as HTMLButtonElement;
const editor = document.getElementsByName("editor")[0] as HTMLTextAreaElement;
const reg = document.getElementsByName("reg")[0] as HTMLInputElement;
const wynik = document.getElementById("wynik") as HTMLDivElement;

enter.addEventListener("click", (e) => {
  const expression = new RegExp(reg.value);
  const text = editor.value;
  wynik.textContent = expression.test(text)
    ? `/${reg.value}/ jest poprawne!`
    : `/${reg.value}/ jest niepoprawne!`;
});
