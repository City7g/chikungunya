// import { gsap } from "gsap"
import { preloader } from './preloader'
import { card } from './card'
import { hamburger } from './hamburger'
import { navigator } from './navigator'
import { parallax } from './parallax'
import { scroll } from './scroll'
import { popup, showPopup } from './popup'
import { cursor } from './cursor'
import { form } from './form'
import { test } from './test'

preloader()
card()
hamburger()
navigator()
// parallax()
if (window.location.pathname === '/') {
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
    if(window.innerWidth >= 1200 && window.innerHeight < 900) {
      showPopup('.popup-question')
      document.querySelector('.popup-question__title').textContent = item.querySelector('h5').textContent
      document.querySelector('.popup-question__text').textContent = item.querySelector('p').textContent
    } else {
      if(item.querySelector('p').clientHeight > 60) {
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