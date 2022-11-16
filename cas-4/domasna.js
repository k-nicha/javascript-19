function validateLoginCredentials(username, password) {
  // guard clause
  if (!username || !password) {
    console.log('Please input a valid username and password!')
    return 
  }

  if (username.length < 8 || password.length < 8) {
    console.log('Username and password must be at least 8 characters long')
    return
  }
  
  if (username === username.toLowerCase() || username === username.toUpperCase()) {
    console.log('Username must contain a mix of lowercase and uppercase characters')
    return
  }

  if (password === password.toLowerCase() || password === password.toUpperCase()) {
    console.log('Password must contain a mix of lowercase and uppercase characters')
    return
  }

  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
  if (!specialChars.test(username) || !specialChars.test(password)) {
    console.log('Username and password must contain at least one special character')
    return
  }

  if (!/\d/.test(username) || !/\d/.test(password)) {
    console.log('Username and password must contain at least one number')
    return
  }

  console.log('Login successful!')
}

validateLoginCredentials('ASDASFGASG', '123$#asdgasGBHV')
