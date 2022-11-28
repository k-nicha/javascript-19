async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const user = await response.json();

  generateProfile(user)
}


function generateProfile (user) {
  const { name, username, email, address, website } = user

  document.body.style = "text-align: center;"

  const nameElement = document.createElement('div')
  nameElement.innerText = name;
  document.body.appendChild(nameElement)

  const usernameElement = document.createElement('div')
  const usernameLabel = document.createElement('span')
  usernameLabel.innerText = 'Username'
  const usernameValue = document.createElement('span')
  usernameValue.innerText = username;
  usernameElement.classList = ['container']

  usernameElement.appendChild(usernameLabel)
  usernameElement.appendChild(usernameValue)

  document.body.appendChild(usernameElement)  

  const emailElement = document.createElement('div')
  const emailLabel = document.createElement('span')
  emailLabel.innerText = 'Email'
  const emailValue = document.createElement('span')
  emailValue.innerText = email;
  emailElement.classList = ['container']

  emailElement.appendChild(emailLabel)
  emailElement.appendChild(emailValue)

  document.body.appendChild(emailElement)

  document.querySelectorAll()

}


getUser()