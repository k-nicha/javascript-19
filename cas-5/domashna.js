// zadaca 5

// Array.sort((prev, next) => { return prev.author.localeCompare(next.author) > 0})

// zadaca 4 

const spTeam = {
  wins: 3,
  losses: 4,
  draws: 2
}

function calcPoints(team) {
  return team.wins*3 + team.draws*1 - team.losses*2
}

console.log(calcPoints(spTeam))

//zadaca 3

const myAnimals = [
  { type: 'Horse', numberOfLegs: 4 },
  { type: 'Sheep', numberOfLegs: 4 },
  { type: 'Chicken', numberOfLegs: 2 },
  { type: 'Fish', numberOfLegs: 0 },
  { type: 'Dog', age: 7, numberOfLegs: 4 },
  { type: 'Goat', numberOfLegs: 4 }
]

console.log(myAnimals.reduce((total, animal) => total + animal.numberOfLegs, 0))

//zadaca 2
const names = ['koco nica', 'alek Dimitriev']

console.log(names.map(name => {
  let nameArray = name.split(' ')
  nameArray = nameArray.map(shortname => {
    let newname = shortname.toLowerCase();
    newname = newname.split('')
    let firstchar = newname.shift()
    firstchar = firstchar.toUpperCase()
    newname.unshift(firstchar)
    return newname.join('')
  })
  return nameArray.join(' ')
}))

// zadaca 1 
const emails = ['test@test.com', 'test123123', 'koco@koco.net', 'test@koco.co']

const invalid = emails.filter(email => {
  if (email.includes(' ')) return true
  if (!email.includes('@')) return true
  if (!email.includes('.com') && !email.includes('.net')) return true
  return false
})

console.log(invalid.length ? invalid: 'All emails are valid')
