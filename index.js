document.querySelector('button').addEventListener('click', () => {
  const li = document.createElement('li')
  li.innerText = 42
  document.querySelector('ul')
    .appendChild(li)
})