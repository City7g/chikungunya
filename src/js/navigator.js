import { setScrollX, setCurrentScrollX } from './scroll'

const navigator = () => {
  document.querySelectorAll('.navigation-links a[href^="#"], .footer-links a[href^="#"]').forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault()

      if (document.querySelector(`#${item.hash.substring(1)}`)) {
        // const sectionIsBig = document.querySelector(`#${item.hash.substring(1)} .section__wrap`).scrollWidth > window.innerWidth

        // console.log(sectionIsBig)

        document.querySelector(`#${item.hash.substring(1)}`).scrollIntoView({ inline: 'center', behavior: 'smooth' });
        const currentScrollX = document.querySelector(`#${item.hash.substring(1)}`).offsetLeft + document.querySelector(`#${item.hash.substring(1)}`).clientWidth / 2 - window.innerWidth / 2
        setScrollX(currentScrollX)
        setCurrentScrollX(currentScrollX)
      }

      if (window.location.pathname !== '/') {
        window.location.href = '/';
      }

      document.querySelector('.navigation-links').classList.remove('active')
      document.querySelector('.navigation-hamburger').classList.remove('active')
    })
  })
}

export { navigator }