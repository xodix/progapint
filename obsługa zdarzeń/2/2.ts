const km = document.getElementsByName("km")[0] as HTMLInputElement;
const free = document.getElementsByName("gda")[0] as HTMLInputElement;
const res = document.getElementById("res");
const handleInput = (e: Event) => {
  if (free.checked)
    return (res!.textContent = "Dowieziemy Twoją pizzę za darmo");
  res!.textContent = `Dowóz będzie Cię kosztował ${+km.value * 2} zł`;
};
km.addEventListener("input", handleInput);
free.addEventListener("change", handleInput);
