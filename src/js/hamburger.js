const hamburger = () => {
  document.querySelector('.navigation-hamburger').addEventListener('click', () => {
    document.querySelector('.navigation-hamburger').classList.toggle('active')
    document.querySelector('.navigation-links').classList.toggle('active')
  })
}

export { hamburger }