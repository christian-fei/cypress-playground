document.querySelector('button').addEventListener('click', () => {
  const li = document.createElement('li')
  li.innerText = `😱`
  document.querySelector('ul')
    .appendChild(li)
})