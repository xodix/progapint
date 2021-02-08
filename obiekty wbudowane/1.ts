const date: Date = new Date();

date.getHours();

const year = date.getFullYear();
const day = date.getDate();
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();
const miliseconds = date.getMilliseconds();

// console.log(`${hours}::${minutes}::${seconds}`);

const table = [];
for (let i = 0; i < 5; i++) {
  const l = Math.floor(Math.random() * 9999999) + 90000000;
  const d = new Date(l);
  table.push({ miliseconds: l, "date object": d });
}

console.table(table);

const a = Math.floor(Math.random() * 30) + 50;
const b = Math.floor(Math.random() * 4) + 3;
const c = Math.floor(Math.random() * 15) + 5;
const d = Math.floor(Math.random() * 7) + 15;
const e = Math.floor(Math.random() * 20) + 30;
const f = Math.floor(Math.random() * 30) + 10;
const g = Math.floor(Math.random() * 3) + 2;

const datess = new Date(a, b, c, d, e, f, g);

console.log(datess);
datess.setFullYear(1056);
console.log(datess);
