// Obiekty w javascript powtórzenie wiadomości
class Person {

  constructor(public name: string, public surname: string, public age: number) { }

  public outputData() {
    return `${this.name} ${this.surname} is ${this.age} years old`;
  }

  public static welcome() {
    return "Hello I'm a Person class."
  }

}

const tom = new Person("tom", "riddle", 20);
console.log(tom.outputData());
Person.welcome();