let person = {
  // properties
  // key - value pairs
  name: "Kocho",
  age: 30,
  gender: 'male',
  height: 170,
  weight: null,
  eat: () => { console.log(`${person.name} ate an apple`) }
}


console.log(person)

person.gender = 'female'
delete person.gender
console.log(person)
console.log(person['gender'])

// spread syntax // destructor
let person2 = Object.assign({profession: 'programmer'}, person)
let person3 = {
  ...person,
  profession: 'accountant',
  age: 40
}

person2.age = 20;
person2.gender = 'female';
person2.eat();

console.log(person2)
console.log(person3)
