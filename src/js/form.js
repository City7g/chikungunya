import { showPopup, closePopup } from './popup'

const resetForm = (form) => {
  form.querySelectorAll('input, textarea').forEach(i => {
    if (i.type === 'checkbox') {
      i.checked = false
    } else if (i.type === 'text' || i.type === 'email' || i.tagName === "TEXTAREA") {
      i.value = ''
    }
  })
}

const validationForm = (form) => {
  let isValidForm = true

  form.querySelectorAll('input, textarea').forEach(i => {
    if (i.type === 'checkbox') {
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
  if (document.querySelector('form')) {
    document.querySelectorAll('form').forEach(item => {
      item.setAttribute('novalidate', true)

      item.addEventListener('submit', async function(e) {
        e.preventDefault()

        const isValidForm = validationForm(item)

        if (isValidForm) {
          const data = {
            firstName: item.querySelector('input[name="first"]').value,
            lastName: item.querySelector('input[name="last"]').value,
            email: item.querySelector('input[name="email"]').value
          }

          let formData = new FormData(item)
          formData = Object.fromEntries(formData);

          console.log(e)
          console.log(this)
          console.log(formData)

          console.log(data)

          const response = await fetch('/mail.php', {
            method: 'POST',
            body: formData,
            headers: {
              'Content-Type': 'application/json'
            },
          })

          if (!response.ok) {
            throw new Error(`Ошибка по адресу ${response.url}, статус ошибки ${response.status}`)
          }

          if (document.querySelector('.popup-form') && document.querySelector('.popup-form').contains(item)) {
            closePopup(document.querySelector('.popup-form'), false)
          }
          
          const asd = await response.text()
          console.log(asd)

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