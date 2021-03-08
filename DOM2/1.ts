document.getElementsByName("formularz")[0].addEventListener(
  "change",
  (e: Event) => {
    const c = document.forms[0].childNodes;
    const w = document.getElementById("wynik");
    w!.textContent = "";
    for (const x of c) {
      if ((x! as HTMLFormElement).value)
        w!.innerHTML += `${(x! as HTMLFormElement).name}: ${
          (x! as HTMLFormElement).value
        }<br />`;
    }
  },
  { capture: true }
);
