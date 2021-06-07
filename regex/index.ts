// definiowanie wyrażeń reguralnych
const reg1 = /[0-9]{3}/;
const reg2 = new RegExp(/[0-9]{3}/);
console.log(reg1.test("102"));
console.log(reg1.test("ala"));
