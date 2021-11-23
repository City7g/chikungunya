import { showPopup } from './popup'

const card = () => {
  document.querySelectorAll('.card').forEach(item => {
    item.addEventListener('click', () => {
      if (window.innerWidth < 1200) {

        item.parentElement.childNodes.forEach(element => {
          if (!element.tagName) return
          element.classList.remove('active')
          // element.style.removeProperty('height')
        })

        setTimeout(() => {
          item.classList.toggle('active')
          // item.style.height = item.scrollHeight + 'px'
        }, 200);
      } else {
        document.querySelector('.popup-card__title').textContent = item.querySelector('.card__title').textContent
        document.querySelector('.popup-card__img').src = item.querySelector('.card__img').getAttribute('src')
        document.querySelector('.popup-card__description').textContent = item.querySelector('.card__description').textContent

        showPopup('.popup-card')
      }
    })
  })
}

export { card }



// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.card.active').forEach(item => {
//     item.style.height = item.scrollHeight + 'px'
//   })
// })