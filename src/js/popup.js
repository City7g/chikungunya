const showPopup = (popupName) => {
  const widthScroll = window.innerWidth - document.body.scrollWidth
  document.body.style.overflow = 'hidden'

  if (widthScroll > 0) {
    document.body.style.marginRight = widthScroll + 'px'
  }

  document.querySelector(popupName).classList.add('show')
  setTimeout(() => {
    document.querySelector(popupName).style.opacity = 1
  }, 10);
}

const closePopup = (popupName, isFirstPopup = true) => {
  popupName.style.opacity = 0

  setTimeout(() => {
    popupName.classList.remove('show')

    document.body.style.overflow = isFirstPopup ? '' : 'hidden'

    if (isFirstPopup) {
      document.body.style.marginRight = ''
    }
  }, 300);
}

const popup = () => {
  document.querySelectorAll('a[href="#symptoms"]').forEach(item => {
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

          document.querySelectorAll('video').forEach(i => {
            i.pause()
          })
        }
      })
    })
  }

  if (document.querySelector('.open-video')) {
    document.querySelectorAll('.open-video').forEach(item => {
      item.addEventListener('click', () => {
        showPopup('.popup-video')
      })
    })
  }

  if (document.querySelector('button.section__share-button')) {
    document.querySelector('button.section__share-button').addEventListener('click', () => {
      showPopup('.popup-form')
    })
  }



  // document.querySelector('#four .section__share-button').click()
}

export { showPopup, closePopup, popup }