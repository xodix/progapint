// bilety normalne
const bn = document.getElementsByName("bn")[0] as HTMLInputElement;
// bilety ulgowe
const bu = document.getElementsByName("bu")[0] as HTMLInputElement;
// ilość godzin
const ig = document.getElementsByName("ig")[0] as HTMLInputElement;
// karta dużej rodziny
const kdr = document.getElementsByName("kdr")[0] as HTMLInputElement;

document.getElementsByTagName("form")[0].addEventListener("submit", () => {
  // liczba biletów ulgowych
  let lbu = +bu.value;
  const freeTickets = Math.floor(lbu / 15);
  if (freeTickets <= +bn.value) lbu -= freeTickets;
  const cenaPodstawowa =
    +ig.value > 4
      ? +bn.value * 50 + lbu * 25
      : +bn.value * 10 * +ig.value + lbu * 5 * +ig.value;
  document.getElementById(
    "wynik"
  )!.textContent = `Całkowity koszt wstępu do akuaparku: ${
    kdr.checked ? 0.9 * cenaPodstawowa : cenaPodstawowa
  }zł`;
});
