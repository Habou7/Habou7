const form = document.querySelector('form')
const message = document.querySelector('#message')

form.addEventListener('submit', e => {
  e.preventDefault()

  const username = form.username.value
  const password = form.password.value

  if (localStorage.getItem(username) !== null) {
    message.textContent = 'Username already exists!'
    window.location.href = 'login.html' // Redirect to login page
    return
  }

  localStorage.setItem(username, password)

  message.textContent = 'Sign up successful!'

  form.reset()

  window.location.href = 'login.html' // Redirect to login page
})
