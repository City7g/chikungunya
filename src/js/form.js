import { showPopup, closePopup } from './popup'

const form = () => {
  if (document.querySelector('form')) {
    document.querySelectorAll('form').forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault()

        let isValidForm = true

        item.querySelectorAll('input, textarea').forEach(i => {
          if (i.type === 'checkbox') {
            if (!i.checked) {
              i.nextElementSibling.style.outlineColor = 'red'
              setTimeout(() => {
                i.nextElementSibling.style.outlineColor = ''
              }, 2000);
              isValidForm = false
            }
          } else if (i.type === 'text' || i.type === 'email' || i.tagName === "TEXTAREA") {
            if (!i.value) {
              i.nextElementSibling.style.display = 'block'
              setTimeout(() => {
                i.nextElementSibling.style.display = ''
              }, 2000);
              isValidForm = false
            }
          }
        })

        if (isValidForm) {
          if (document.querySelector('.popup-form') && document.querySelector('.popup-form').contains(item)) {
            closePopup(document.querySelector('.popup-form'), false)
          }
          isValidForm = true
          showPopup('.popup-thank')
          item.querySelectorAll('input, textarea').forEach(i => {
            if (i.type === 'checkbox') {
              i.checked = false
            } else if (i.type === 'text' || i.type === 'email' || i.tagName === "TEXTAREA") {
              i.value = ''
            }
          })
        }
      })
    })
  }



  if (document.querySelector('form input[type="text"], form input[type="email"], form textarea')) {
    document.querySelectorAll('form input[type="text"], form input[type="email"], form textarea').forEach(item => {
      item.addEventListener('input', () => {
        item.nextElementSibling.style.display = ''
      })
    })
  }

  if (document.querySelector('form input, form textarea')) {
    document.querySelectorAll('form input[type="text"], form input[type="email"], form textarea').forEach(item => {
      item.addEventListener('input', () => {
        item.nextElementSibling.style.display = ''
      })
    })
  }
}

export { form }