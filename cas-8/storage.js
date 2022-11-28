// localStorage and sessionstorage only save string values OR JSON

localStorage.setItem('username', 'Kocho')
localStorage.setItem('password', 'Test123')

const username = localStorage.getItem('username')

localStorage.removeItem('password')
localStorage.clear()


// sessionStorage.setItem()