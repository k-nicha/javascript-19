// JSON - javascript object notation

// { name: 'Koco' }  ==> { 'name': 'Koco' } 

// JSON.stringify(obj) // konvertira od objekt vo json string
// JSON.parse(json) // konvertira od json string vo plain object

fetch('https://jsonplaceholder.typicode.com/posts') // end-point
  .then((response) => response.json())
  .then((posts) => {
    console.log(posts)

    posts.forEach(post => {

    })
    // document.createElement
  })
  .catch(error => console.log(error))

async function getTodos () {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  if (!response.ok) {
    // error occurred
  }
  const data = await response.json()
  console.log(data)
}

getTodos()








