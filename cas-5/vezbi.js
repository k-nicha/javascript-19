const kvadrat = {
  width: 10,
  height: 20
}

const calculateArea = (square) => {
  return square.width * square.height;
}

console.log(calculateArea(kvadrat))

const person1 = {
  name: 'Koco',
  pets: ['Cat', 'Dog', 'Parrot']
}

const person2 = {
  name: 'Alek',
  pets: ['Turtles']
}

const people = [person1, person2]

function displayPets (arrayOfPeople) {
    arrayOfPeople.forEach((person) => {
      console.log(`${person.name} has ${person.pets.length} pets.`)
    })
}

displayPets(people)


// da se napise funkcija sto od lista od studenti ke presmeta koj e prosecniot prosek na sekoj od studentite
const students = [
  {
    id: 1,
    name: 'Koco',
    year: 1,
    courses: [
      { name: 'math', grade: 7 },
      { name: 'chemistry', grade: 8 },
      { name: 'programming', grade: 9 }
    ]
  },
  {
    id: 2,
    name: 'Alek',
    year: 2,
    courses: [
      { name: 'math', grade: 10 },
      { name: 'chemistry', grade: 6 },
      { name: 'programming', grade: 7 },
      { name: 'physics', grade: 10 }
    ]
  },
  {
    id: 3,
    name: 'Ana',
    year: 1,
    courses: [
      { name: 'math', grade: 8 },
      { name: 'chemistry', grade: 8 },
      { name: 'programming', grade: 6 }
    ]
  }
]

function calculateAvgGrade (allStudents) { 
  let array = []
  allStudents.forEach(student => { // callback function (anonymous)
    const avgGrade = 
      student.courses.reduce((totalSum, course) => {
        return totalSum + course.grade
      }, 0) / student.courses.length

      console.log(`${student.name} has an average grade of ${avgGrade}`)
      array = [...array, { name: student.name, averageGrade: avgGrade }]
  })
  return array
}

const averageGrades = calculateAvgGrade(students)
console.log(averageGrades)

// da se napise funkcija koja sto za istata lista od studenti, dokolku studentot im prosek povisok od 8, treba da se smesti vo posebna niza bidejki uspolnuva uslovi za stipendija.
// otkako ke se ispolni listata da se otpecatat iminjata na site studenti koi go ispolnuvaat uslovot

function canReceiveScholarship (gradesList) {
  const filteredList = gradesList.filter((student) => {
    if (student.averageGrade > 8) return true
    return false
  })
  return filteredList
}

console.log(canReceiveScholarship(averageGrades))


// imame lista od knigi, kade sto sekoja kniga e objekt so slednite svojstva: ime, avtor, godina na izdavanje, ISBN, cena i read?: (boolean). Treba da se izmine listata i da se napravi suma na site knigi koi sto gi nemam procitano

const myBooks = [
  {
    author: 'Fyodor Dostoyevsky',
    name: 'Crime and punishment',
    year: 1887,
    ISBN: 1,
    price: 500,
    read: false
  },
  {
    author: 'J.K. Rowling',
    name: 'Harry Potter',
    year: 2000,
    ISBN: 2,
    price: 600,
    read: false
  },
  {
    author: 'J.R.R. Tolkien',
    name: 'The Hobbit',
    year: 1910,
    ISBN: 3,
    price: 1000,
    read: true
  }
]

function calculateTotalPrice (books) {
  return books.reduce((currentSum, book) => {
    if (!book.read) {
      return currentSum += book.price
    }
    return currentSum
  }, 0)
}

console.log(calculateTotalPrice(myBooks))

