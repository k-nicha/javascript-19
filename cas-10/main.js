console.log(calculateAverage(5, 10))

function makeInputsBlue() {
  const inputs = document.getElementsByClassName('styled')
  for (const input of inputs) {
    input.style="border: 1px solid blue";
  }
}

makeInputsBlue()

const array = ['ime']
for (let i = array.length - 1; i >= 0; i-=3) {

}

// a==b sporeduva samo vrednost  10 == '10' => TRUE 
// a===b sporeduva vrednost i tp  10 === '10' => FALS

// tipovi na promenlivi
// String, number, boolean, array, object, null, undefined NaN

// 5! = 5 * 4* 3* 2* 1
function factoreil(num) {
  let total = 1;
  for (let i = num; i >= 1; i--) {
    total = total * i
  }

  return total
}

console.log(factoreil(5)) // => 120 


function factorielRecursive(num) {
  if (num === 1) {
    return num
  }
  return num * factorielRecursive(num-1)
}

console.log(factorielRecursive(5))

const students = [
  { id: 1, name: 'Koco' },
  { id: 2, name: 'Aleksandar' },
  { id: 3, name: 'Filip' }
]

const teachers = [
  { id: 5, name: 'Ivana' },
  { id: 6, name: 'Marija' },
  { id: 3, name: 'Filip' }
]


// Dali vo nizata od predavaci ima nekoj student ???
const studentIds = students.map((student) => student.id)

const theseAreBoth = teachers.filter((teacher) => {
  if (studentIds.includes(teacher.id)) return true
  return false
})

console.log(theseAreBoth)

// da se napise funkcija koja sto prime neogranicen broj na broevi kako parametri i ke vrati niven zbir

function calculateSum(...parameters) {
  // parameters ==> []
  return parameters.reduce((total, num) => total + num, 0)
}

console.log(calculateSum())