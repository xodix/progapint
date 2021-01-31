// !obiekty wbudowane!
// *string*
// tslint:disable-next-line: no-construct ban-types
const text: string = "saas";
text.split("");
text.toUpperCase();
text.toLowerCase();
console.log(text.substring(1, 3));
interface String {
  capitalize(): string;
}

String.prototype.capitalize = function () {
  return this[0].toUpperCase() + this.substring(1);
};

console.log(text.capitalize());
