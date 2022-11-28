function getEl(el) {
  return document.getElementById(el)
}

const books = JSON.parse(localStorage.getItem('books')) || []

function createBook(event) {
  event.preventDefault()

  const author = getEl('author').value
  const name = getEl('name').value
  const year = getEl('year').value

  const book = { author, name, year }
  
  if (isDuplicate(book)) {
    return
  }

  books.push(book)
  localStorage.setItem('books', JSON.stringify(books))
  
  event.target.reset()
  console.log(localStorage)
}

function isDuplicate (newBook) {
  const found = books.find(book => newBook.author === book.author && newBook.name === book.name)
  // const found = books.some(book => newBook.author === book.author && newBook.name === book.name)

  return found
}