const form = document.querySelector('form')
const message = document.querySelector('#message')

form.addEventListener('submit', e => {
  e.preventDefault()

  const username = form.username.value
  const password = form.password.value

  const storedPassword = localStorage.getItem(username)

  if (storedPassword === null || password !== storedPassword) {
    message.textContent = 'Invalid username or password!'
    return
  }

  message.textContent = 'Login successful!'

  form.reset()

  window.location.href = 'index.html'
})
