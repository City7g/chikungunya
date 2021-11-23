// import { gsap } from "gsap"
import { preloader } from './preloader'
import { card } from './card'
import { hamburger } from './hamburger'
import { navigator } from './navigator'
import { parallax } from './parallax'
import { scroll, scrollX } from './scroll'
import { popup } from './popup'
import { cursor } from './cursor'
import { test } from './test'

preloader()
card()
hamburger()
navigator()
// parallax()
scroll()
popup()
cursor()
// test()

window.scroll(0, 0)

document.querySelectorAll('*[href="#"]').forEach(item => item.addEventListener('click', e => e.preventDefault()))

document.querySelectorAll('.questions__item li').forEach(item => {
  item.addEventListener('click', () => {
    if(window.innerWidth >= 1200) {
      item.closest('.questions__wrap').querySelectorAll('.questions__item p').forEach(i => {i.style.height = 0 + 'px'})
    } else {
      item.closest('.questions__item').querySelectorAll('.questions__item p').forEach(i => {i.style.height = 0 + 'px'})
    }
    item.querySelectorAll('p').forEach(i => {
      i.style.height = i.scrollHeight + 'px'
    })
  })
})

window.addEventListener('DOMContentLoaded', () => {
  if(document.querySelector('.questions__item p')) {
    document.querySelector('.questions__item p').style.height = document.querySelector('.questions__item p').scrollHeight + 'px'
  }
})

document.querySelectorAll('.main-form__input input,.main-form__textarea textarea').forEach(item => {
  item.addEventListener('focus', () => {
    item.nextElementSibling.style.display = 'block'
  })
  item.addEventListener('blur', () => {
    item.nextElementSibling.style.display = ''
  })
})

window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.section').forEach(item => {
    item.style.flex = `0 0 ${item.scrollWidth * 0.8 - 500}px`
  })
})

// const block = document.createElement('div')
// block.style.position = 'fixed'
// block.style.bottom = '40px'
// block.style.left = '20px'
// block.textContent = window.innerHeight
// document.body.append(block)

// window.addEventListener('resize', () => {
//   block.textContent = window.innerHeight
// })