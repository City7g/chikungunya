const popup = () => {
  const showPopup = (popupName) => {
    document.body.style.overflow = 'hidden'

    document.querySelector(popupName).classList.add('show')
    setTimeout(() => {
      document.querySelector(popupName).style.opacity = 1
    }, 10);
  }

  const closePopup = (popupName) => {
    popupName.style.opacity = 0

    setTimeout(() => {
      popupName.classList.remove('show')

      document.body.style.overflow = 'auto'
    }, 400);
  }

  if (document.querySelector('form')) {
    document.querySelectorAll('form').forEach(item => {
      item.addEventListener('submit', e => {
        e.preventDefault()

        console.log('form')

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
        if (e.target.classList.contains('popup__close') || e.target.classList.contains('popup')) {
          closePopup(item)
        }
      })
    })
  }
}

export { popup }