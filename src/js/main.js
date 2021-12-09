// import { gsap } from "gsap"
import { preloader } from './preloader'
import { card } from './card'
import { hamburger } from './hamburger'
import { nav } from './nav'
import { parallax } from './parallax'
import { scroll } from './scroll'
import { popup, showPopup } from './popup'
import { cursor } from './cursor'
import { form } from './form'
import { test } from './test'

preloader()
card()
hamburger()
nav()
// parallax()
if (window.location.pathname !== '/privacy.html') {
  scroll()
}
popup()
cursor()
form()
// test()

document.querySelectorAll('*[href="#"]').forEach(item => item.addEventListener('click', e => e.preventDefault()))

document.querySelectorAll('.questions__item li').forEach(item => {
  item.addEventListener('click', () => {
    if (window.innerWidth >= 1200) {
      item.closest('.questions__wrap').querySelectorAll('.questions__item p').forEach(i => { i.style.height = 0 + 'px' })
    } else {
      item.closest('.questions__item').querySelectorAll('.questions__item p').forEach(i => { i.style.height = 0 + 'px' })
    }
    if (window.innerWidth >= 1200 && window.innerHeight < 900) {
      showPopup('.popup-question')
      document.querySelector('.popup-question__title').textContent = item.querySelector('h5').textContent
      document.querySelector('.popup-question__text').textContent = item.querySelector('p').textContent
    } else {
      if (item.querySelector('p').clientHeight > 20) {
        item.querySelectorAll('p').forEach(i => {
          i.style.height = ''
        })
      } else {
        item.querySelectorAll('p').forEach(i => {
          i.style.height = i.scrollHeight + 'px'
        })
      }
    }
  })
})

window.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.questions__item p') && !(window.innerWidth >= 1200 && window.innerHeight < 900)) {
    document.querySelector('.questions__item p').style.height = document.querySelector('.questions__item p').scrollHeight + 'px'
  }
})

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section').forEach(item => {
    item.style.flex = `0 0 ${item.scrollWidth * 0.8 - 500}px`
  })
})

window.addEventListener('resize', () => {
  document.querySelectorAll('.section').forEach(item => {
    item.style.flex = `0 0 ${item.scrollWidth * 0.8 - 500}px`
  })
})




// window.addEventListener('DOMContentLoaded', () => {
//   const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//   const date = new Date()

//   const addCopy = (selector) => {
//     if (document.querySelector(selector)) {
//       // document.querySelector(selector).textContent = `© ${date.getFullYear()} ${document.querySelector(selector).textContent}`
//       document.querySelector(selector).textContent += ` ${months[date.getMonth()]} ${date.getFullYear()}`
//     }
//   }

//   addCopy('.footer__copy')
//   addCopy('.privacy-footer p')
// })

// Privacy header
if (window.location.pathname === '/privacy.html') {
  const privacyHeader = () => {
    if (window.innerWidth >= 1200) {
      document.querySelector('.privacy-header').style.display = 'block'
      document.querySelector('.navigation').style.display = 'none'
    } else {
      document.querySelector('.privacy-header').style.display = 'none'
      document.querySelector('.navigation').style.display = 'block'
    }
  }

  privacyHeader()

  window.addEventListener('resize', privacyHeader)
}