// OOP - object-oriented programming
// pascal-case naming style

// class name declaration
class Person {
  // class body

  // object properties (fields) - variables
  // object functions (methods) - functions

  // fields are not mandatory
  name;
  #age; // private properties are defined
  gender;
  static maxAge = 120;

  // instancira objekt od tip Person
  constructor(name, age, gender) {
    this.name = name;
    this.#age = age;
    this.gender = gender;
  }

  // getter 
  get age() {
    return this.#age
  }

  // setter
  set age(newAge) {
    if (this.#validateAge(newAge)) {
      this.#age = newAge;
    }
  }

  #validateAge(newAge) {
    if (newAge > Person.maxAge) {
      console.error('Unsupported value!')
      return false
    }
    return true
  }

  getGender() {
    return this.gender;
  }

}

const Object1 = { name: 'Koco', age:30, gender: 'male' } // Object

// instanciranje (kreiranje) na nov objekt od tip Person
const Person1 = new Person('Aleksandar', 20, 'male')

console.log(Object1, Person1)

Person1.age = 50 // Person1.setAge(50)
console.log(Person1.age)
console.log(Person.maxAge)


// class inheritance (nasleduvanje)
class Employee extends Person {
  salary
  position

  constructor(name, age, gender, salary, position) {
    super(name, age, gender)
    this.salary = salary
    this.position = position
  }
}

const Rabotnik = new Employee('Koco', 30, 'male', 1000, 'programmer')
console.log(Rabotnik)
console.log(Rabotnik.age)
