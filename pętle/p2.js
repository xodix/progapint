// Pętle (instrukcje iteracyjne)
// 1. for()
for (let i = 0; i < 15; i++) {
    console.log(`$ ${i+1}`);
}

for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) console.log(`${i}, `);
}
// pomijamy liczby: 7, 13
for (let i = 0; i <= 100; i++) {
    if ( i % 2 !== 0 || i !== 7 || i !== 13) console.log(i)
}