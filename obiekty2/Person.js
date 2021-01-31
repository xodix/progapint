export default class Person {

  constructor(name, surname, proffesion) {

    for (const arg in arguments) {
      this[arg] = arguments[arg];
    }

  }

  show() {
    alert(this.surname);
  }

}
