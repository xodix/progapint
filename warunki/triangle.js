//  JUŻ MÓWILIŚMY O ZMIENNYCH, ALE OK
let v1 = prompt('podaj a');
v1 = parseInt(v1);
let v2 = prompt('podaj b');
v2 = parseInt(v2);
let v3 = prompt('podaj c');
v3 = parseInt(v3);

if (v1+v2 > v3 && v1+v3 > v2 && v3+v2 > v1) document.write("może być wykonany");
else document.write("trójkąt nie może być wykonany");
