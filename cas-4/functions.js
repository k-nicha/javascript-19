
// function parameters / function arguments
function myFirstFunction (greeting, name) {
  // function body
  // code executed by the function

  console.log(greeting + name)
  
  // return value
  return
}

// function call / function invocation
myFirstFunction('Hello ', 'Alek')
myFirstFunction('Hello ', 'Koco')

function sum(num1, num2) {
  let result = num1 + num2
  return result
}

let result = sum(4, 5)
console.log(result)

// Da se napise funkcija koja kako parametar dobiva ime vo tekstualen format (string)
// i gi vrakja inicijalite od zadadenoto ime (RETURN na iicijali)

// "John Ronald Reuel Tolkien" ===> 'JRRT'
function getInitials(name) {
  let initials = ''
  const nameArray = name.split(' ')
  for (const word of nameArray) {
    initials += word.charAt(0)
  }
  return initials
}

console.log(getInitials("John Ronald Reuel Tolkien"))


// Da se napise funkcija koja sto kako parametar prima temperatura (brojka) vo farenhajtovi stepeni i treba da ja vrati nejzinata vrednost vo celziusovi. Formulata za konverzija e
// 1C = (1F - 32) * 5 / 9

// 100 => 38

function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9
}

console.log(convertFahrenheitToCelsius(100))

// Da se napise funkcija koja sto kje konvertira UTC Datum vo sledniot format ==> 'DD/MM/YYYY - 21:44'

function convertDate() {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()

  // string template
  return `${day}/${month}/${year} - ${hours}:${minutes}`
  // return day + '/' + month + '/'+ year + ' - ' + hours + ':' + minutes
}

console.log(convertDate())