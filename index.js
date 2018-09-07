document.querySelector('#trigger').addEventListener('click', () => {
  const li = document.createElement('li')
  li.innerText = `😱`
  document.querySelector('ul').appendChild(li)
})
document.querySelector('#showcat').addEventListener('click', () => {
  document.querySelector('img').style.display = 'block'
})
