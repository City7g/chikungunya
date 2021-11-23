const showPopup = (popupName) => {
  document.body.style.overflow = 'hidden'

  document.querySelector(popupName).classList.add('show')
  setTimeout(() => {
    document.querySelector(popupName).style.opacity = 1
  }, 10);
}

const closePopup = (popupName, isFirstPopup = true) => {
  popupName.style.opacity = 0

  setTimeout(() => {
    popupName.classList.remove('show')

    document.body.style.overflow = isFirstPopup ? 'auto' : 'hidden'
  }, 300);
}

const popup = () => {
  if (document.querySelector('form')) {
    document.querySelectorAll('form').forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault()

        closePopup(document.querySelector('.popup-form'), false)
        showPopup('.popup-thank')
      })
    })
  }

  document.querySelectorAll('a[href="#"]').forEach(item => {
    item.addEventListener('click', e => {
      e.preventDefault()

      showPopup('.popup-information')
    })
  })

  if (document.querySelector('.popup')) {
    document.querySelectorAll('.popup').forEach(item => {
      item.addEventListener('click', (e) => {
        if (e.target.classList.contains('popup__close') || e.target.classList.contains('popup') || e.target.classList.contains('popup__button')) {
          closePopup(item)
        }
      })
    })
  }

  document.querySelector('button.section__share-button').addEventListener('click', () => {
    showPopup('.popup-form')
  })



  // document.querySelector('#four .section__share-button').click()
}

export { showPopup, popup }