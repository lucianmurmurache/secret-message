document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()

  document.querySelector('#message-panel').classList.add('hide')
  document.querySelector('#link-panel').classList.remove('hide')

  const messageInput = document.querySelector('#message-input')

  const encrypted = btoa(messageInput.value)

  const linkInput = document.querySelector('#link-input')
  linkInput.value = `${window.location}#${encrypted}`
  linkInput.select()
})
