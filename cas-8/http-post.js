
function savePost(post) {
  // request body - tuka gi stavame podatocite sto sakame da gi zacuvame na serverska strana
  fetch('https://jsonplaceholder.typicode.com/posts' , {
    method: 'POST', // http method
    body: JSON.stringify(post)
  })
}

savePost({
  userId: 10,
  title: 'My first post',
  body: 'I am learning more about http requests'
})


function deletePost(postId) {
  // request body - tuka gi stavame podatocite sto sakame da gi zacuvame na serverska strana
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}` , {
    method: 'DELETE', // http method
  })
}

function login() {
  fetch('http://www.nekoeURLzalogin.com', {
    method: 'POST', // http method
    body: JSON.stringify({
      username: document.getElementById('username'),
      password: document.getElementById('password')
    })
  }).then(response => response.json())
  .then(data => console.log(data)) // success or fail
}

async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await response.json()
  localStorage.setItem('posts', JSON.stringify(posts))
}

if (!localStorage.getItem('posts')) {
  getPosts()
}