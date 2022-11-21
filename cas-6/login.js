function login () {
  const username = document.getElementById('username').value
  const password = document.getElementById('password').value
  validateLoginCredentials(username, password)
}

function checkPassword(event) {
  validatePassword(event.target)
}

function validatePassword(element) {
  let error = ''
  let password = element.value

  // guard clause
  if (!password) {
    error = 'Please input a valid username and password!' 
  }

  if (password.length < 8) {
    error = 'Username and password must be at least 8 characters long'
  }

  if (password === password.toLowerCase() || password === password.toUpperCase()) {
    error = 'Password must contain a mix of lowercase and uppercase characters'
  }

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  if (!specialChars.test(password)) {
    error = 'Username and password must contain at least one special character'
  }

  if (!/\d/.test(password)) {
    error = 'Username and password must contain at least one number'
  }

  // check if error message element exists
  const exists = document.getElementById('error-element')
  if (exists) {
    exists.innerText = error
  } else {
    const errorElement = document.createElement('p')
    errorElement.style = 'color: red; font-size: 12px;'
    errorElement.id = 'error-element'
    errorElement.innerText = error
    document.body.appendChild(errorElement)
  }
  
  // color the input with red if there's an error
  element.style="border: 1px solid red;"

  if (!error) {
    // success
    // delete error element
    // color the input in green
    document.body.removeChild(exists)
    element.style="border: 1px solid green;"
  }

}

function validateLoginCredentials(username, password) {
  // guard clause
  if (!username || !password) {
    alert('Please input a valid username and password!')
    return 
  }

  if (username.length < 8 || password.length < 8) {
    alert('Username and password must be at least 8 characters long')
    return
  }
  
  if (username === username.toLowerCase() || username === username.toUpperCase()) {
    alert('Username must contain a mix of lowercase and uppercase characters')
    return
  }

  if (password === password.toLowerCase() || password === password.toUpperCase()) {
    alert('Password must contain a mix of lowercase and uppercase characters')
    return
  }

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  if (!specialChars.test(username) || !specialChars.test(password)) {
    alert('Username and password must contain at least one special character')
    return
  }

  if (!/\d/.test(username) || !/\d/.test(password)) {
    alert('Username and password must contain at least one number')
    return
  }

  alert('Login successful!')
}