import Inputmask from "inputmask"
import { showPopup, closePopup } from './popup'

const resetForm = (form) => {
  form.querySelectorAll('input, textarea').forEach(i => {
    if (i.type === 'checkbox') {
      i.checked = false
    } else if (i.type === 'text' || i.type === 'email' || i.type === 'tel' || i.tagName === "TEXTAREA") {
      i.value = ''
    }
  })
}

const checkNumInputs = () => {
  const numInputs = document.querySelectorAll('input[type="tel"]');

  numInputs.forEach(item => {
    item.addEventListener('input', e => {
      if (item.value.length > 10) {
        e.preventDefault()
      }
      item.value = item.value.replace(/\+/g, '');
      item.value = item.value.replaceAll(/\D/g, '');
      if (item.value.length > 13) {
        item.value = item.value.substring(0, 13)
      }
    });
  });
};

const validationForm = (form) => {
  let isValidForm = true

  form.querySelectorAll('input, textarea').forEach(i => {
    if (i.type === 'checkbox' && !i.name) {
      if (!i.checked) {
        i.nextElementSibling.style.outlineColor = 'red'
        setTimeout(() => {
          i.nextElementSibling.style.outlineColor = ''
        }, 2000);
        isValidForm = false
      }
    } else if (i.type === 'text' || i.tagName === 'TEXTAREA') {
      if (!i.value) {
        i.nextElementSibling.style.display = 'block'
        setTimeout(() => {
          i.nextElementSibling.style.display = ''
        }, 2000);
        isValidForm = false
      }
    } else if (i.type === 'email') {
      let regularEmail = /^[^\s@]+@[^\s@]+$/

      if (!regularEmail.test(i.value)) {
        i.nextElementSibling.style.display = 'block'
        setTimeout(() => {
          i.nextElementSibling.style.display = ''
        }, 2000);
        isValidForm = false
      }
    }
  })

  return isValidForm
}

// const sendMail = (name) => {
//   const data = JSON.stringify({ name })

//   fetch('/mail.php', {
//     method: 'POST',
//     body: data
//   }).then(response => {
//     if(response.ok) {

//     }
//   })
// }

const form = () => {
  const selector = document.querySelectorAll("input[type='tel']");

  const im = new Inputmask("(999) 999-9999");
  im.mask(selector);

  // if (document.querySelector('input[type="tel"]')) {
  //   checkNumInputs()
  // }

  if (document.querySelector('form')) {
    document.querySelectorAll('form').forEach(item => {
      item.setAttribute('novalidate', true)

      item.addEventListener('submit', async function (e) {
        e.preventDefault()

        const isValidForm = validationForm(item)

        if (isValidForm) {
          let formData = new FormData(item)
          if (item.getAttribute('data-name')) {
            formData.append('formName', item.getAttribute('data-name'))
          }

          item.querySelectorAll('input[type="checkbox"][name]').forEach(i => {
            formData.set(i.name, i.checked ? 'True' : 'False')
          })

          formData = Object.fromEntries(formData)

          const response = await fetch('inc/mail.php', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
              'Content-Type': 'application/json',
              'X-Requested-With': 'xmlhttprequest'
            },
          })

          // if (!response.ok) {
          //   throw new Error(`Ошибка по адресу ${response.url}, статус ошибки ${response.status}`)
          // }

          if (document.querySelector('.popup-form') && document.querySelector('.popup-form').contains(item)) {
            closePopup(document.querySelector('.popup-form'), false)
          }

          if (response.ok) {
            document.querySelector('.popup-thank__title').textContent = 'Thank You'
            document.querySelector('.popup-thank__text').textContent = 'Your form has been submitted.'
          } else {
            document.querySelector('.popup-thank__title').textContent = 'Error'
            document.querySelector('.popup-thank__text').textContent = 'Server error!'
          }

          showPopup('.popup-thank')
          resetForm(item)
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