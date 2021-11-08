const osoby3 = [
  "Jan Nowak",
  "Kazimierz Zyga",
  "Stefan Koc",
  "Ewa Mocek",
  "Mariusz Abramski",
];
let res = "";

for (let i = 0; i < osoby3.length; i++) {
  res += "<p>" + osoby3[i] + "</p>";
}

console.log(res);
