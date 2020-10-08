// Pętle (instrukcje iteracyjne)
// 1. for()
// for (let i = 0; i < 15; i++) {
//     console.log(`$ ${i+1}`);
// }

// for (let i = 1; i <= 100; i++) {
//     if (i % 2 !== 0) console.log(`${i}, `);
// }
// // pomijamy liczby: 7, 13
// for (let i = 0; i <= 100; i++) {
//     if ( i % 2 !== 0 && i !== 7 && i !== 13) console.log(i);
// }
// wyświetl na ekranie liczby z zakresu od 10 do 99 z dodatkową informacją liczba podzielna przez 3 i przez 5 liczba podielna tylko przez 3 liczba podzielna tylko przez 5
// for (let i = 10; i < 100; i++) {
//     const m5 = i % 5;
//     const m3 = i % 3;
//     if (!m5 && !m3)  console.log(`${i} - liczba podzielna przez 3 i przez 5`);
//     else if (!m3) console.log(`${i} - liczba podielna tylko przez 3`);
//     else if (!m5) console.log(`${i} - liczba podielna tylko przez 5`);
//     else console.log('licza nie podzielna przez 3, ani 5');
// }

// let s = {
//     s5: 0,
//     s3: 0,
//     s3i5: 0
// }

// for (let i = 10; i <= 20; i++) {
//     const m5 = i % 5;
//     const m3 = i % 3;
//     if (!m5 && !m3) {
//         console.log(`${i} - liczba podzielna przez 3 i przez 5`);
//         s.s3i5 += i;
//     } else if (!m3) {
//         console.log(`${i} - liczba podielna tylko przez 3`);
//         s.s3 += i;
//     } else if (!m5) {
//         console.log(`${i} - liczba podielna tylko przez 5`);
//         s.s5 += i;
//     }
// }
// console.log(`suma podzielnych przez 5: ${s.s5}`);
// console.log(`suma podzielnych przez 3: ${s.s3}`);
// console.log(`suma podzielnych przez 3 i 5: ${s.s3i5}`);

// for (let i = 0; i <= 4; i++) {
//     let gwiazdki = ""
//     for (let j = 0; j < i; j++) {
//         gwiazdki += '*';
//     }
//     console.log(gwiazdki);
// }

// wykorzystując ciąg liczbowy powtórzony 5 razy
// const arrray = [1,2,3,4,5]

// for (let i = 1; i <= 5; i++) {
//     for (let j = 0; j <= 5; j++) {
//         console.log(i)
//     }
// }
// let i = 1; // deklaracja zmiennej 
// let z = 1;
// for (let j = 0; j <= 5; j++) {
//     let i = 1;
//     for (; i <= 5; i++) {
//         console.log(i + " ");
//     }
//     z++;
//     j = z;
// }

// WYKORZYSTUJĄC PĘTLE FOR NARYSUJ CHOINKĘ
// TBLICZKA Mnożenia 10x10