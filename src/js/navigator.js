import { setScrollX, setCurrentScrollX } from './scroll'

const navigator = () => {
  document.querySelectorAll('.navigation-links__item').forEach(item => {
    item.addEventListener('click', () => {
      // console.log(document.querySelector(`#${item.getAttribute('data-section')}`))
      if (document.querySelector(`#${item.getAttribute('data-section')}`)) {
        document.querySelector(`#${item.getAttribute('data-section')}`).scrollIntoView({ inline: "center", behavior: "smooth" });
        const currentScrollX = document.querySelector(`#${item.getAttribute('data-section')}`).offsetLeft + document.querySelector(`#${item.getAttribute('data-section')}`).clientWidth / 2 - window.innerWidth / 2
        setScrollX(currentScrollX)
        setCurrentScrollX(currentScrollX)
      }
      document.querySelector('.navigation-links').classList.remove('active')
      document.querySelector('.navigation-hamburger').classList.remove('active')
    })
  })
}

export { navigator }