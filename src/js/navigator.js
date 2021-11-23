import { setScrollX, setCurrentScrollX } from './scroll'

const navigator = () => {
  document.querySelectorAll('a[href^="#"]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()
      // console.log(document.querySelector(`#${item.hash.substring(1)}`))
      if (document.querySelector(`#${item.hash.substring(1)}`)) {
        document.querySelector(`#${item.hash.substring(1)}`).scrollIntoView({ inline: "center", behavior: "smooth" });
        const currentScrollX = document.querySelector(`#${item.hash.substring(1)}`).offsetLeft + document.querySelector(`#${item.hash.substring(1)}`).clientWidth / 2 - window.innerWidth / 2
        setScrollX(currentScrollX)
        setCurrentScrollX(currentScrollX)
      }
      document.querySelector('.navigation-links').classList.remove('active')
      document.querySelector('.navigation-hamburger').classList.remove('active')
    })
  })
}

export { navigator }