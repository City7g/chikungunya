let isShowContent = false

const preloader = () => {
  window.addEventListener('load', () => {
    isShowContent ? hidePreloader() : isShowContent = true
  })

  if (document.querySelector('.intro')) {
    document.querySelector('.intro__button').addEventListener('click', () => {
      document.querySelector('.intro').style.opacity = 0
      setTimeout(() => {
        document.querySelector('.intro').style.display = 'none'
        isShowContent ? hidePreloader() : isShowContent = true
      }, 1200);
    })

    // document.querySelector('.intro').addEventListener('mousemove', e => {
    //   const transformX = -e.clientX + window.innerWidth / 2
    //   const transformY = -e.clientY + window.innerWidth / 2

    //   document.querySelectorAll('.intro__virus').forEach(i => {
    //     const cof = i.getAttribute('data-cof') ? i.getAttribute('data-cof') : 0.007
    //     i.style.transform = `translate(${transformX * cof}px,${transformY * cof}px)`
    //   })
    // })
  }

  const hidePreloader = () => {
    setTimeout(() => {
      if (document.querySelector('.preloader')) {
        document.querySelector('.preloader').style.opacity = 0
      }
    }, 1200);
  }
}

const animVirus = item => {
  let virusTop = window.getComputedStyle(item).getPropertyValue('top')
  let virusLeft = window.getComputedStyle(item).getPropertyValue('left')
  virusTop = +virusTop.substr(0, virusTop.length - 2);
  virusLeft = +virusLeft.substr(0, virusLeft.length - 2);
  const cof = window.innerWidth > 991 ? 100 : 30
  let randomLeft = Math.random() * (cof) - cof/2
  let randomTop = Math.random() * (cof) - cof/2
  if(randomLeft < 5 && randomLeft > -5) {
    randomLeft = 5
  }
  if(randomTop < 5 && randomTop > -5) {
    randomTop = 5
  }

  virusTop += randomLeft;
  if (virusTop < 100) {
    virusTop = 100
  }
  if (virusTop > window.innerHeight - 100) {
    virusTop = window.innerHeight - 100
  }
  virusLeft += randomTop;
  if (virusLeft < 100) {
    virusLeft = 100
  }
  if (virusLeft > window.innerWidth - 100) {
    virusLeft = window.innerWidth - 100
  }

  item.style.top = `${virusTop}px`
  item.style.left = `${virusLeft}px`
}

if (document.querySelector('.preloader__virus')) {
  document.querySelectorAll('.preloader__virus').forEach(item => {
    item.style.transition = '2s all linear'
    animVirus(item)
    const animVirusInterval = setInterval(() => {
      animVirus(item)
    }, 2000);
  })
}

if (document.querySelector('.intro__virus')) {
  document.querySelectorAll('.intro__virus').forEach(item => {
    item.style.transition = '2s all linear'
    animVirus(item)
    const animVirusInterval = setInterval(() => {
      animVirus(item)
    }, 2000);
  })
}

// if(document.querySelector('.preloader')) {
//   document.querySelector('.preloader').addEventListener('mousemove', (e) => {
//     const offsetXMosquito = (e.clientX - window.innerWidth / 2) / 50
//     const offsetYMosquito = (e.clientY - window.innerHeight / 2) / 50
//     const offsetXCircle = (e.clientX - window.innerWidth / 2) / 60
//     const offsetYCircle = (e.clientY - window.innerHeight / 2) / 60

//     document.querySelector('.preloader__mosquito').style.left = `calc(50% + ${offsetXMosquito}px)`
//     document.querySelector('.preloader__mosquito').style.top = `calc(50% + ${offsetYMosquito}px)`
//     document.querySelector('.preloader__circle').style.left = `calc(50% + ${offsetXCircle}px)`
//     document.querySelector('.preloader__circle').style.top = `calc(50% + ${offsetYCircle}px)`

//     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
//       document.querySelector('.preloader__mosquito').style.transition = '0.3s all ease'
//       document.querySelector('.preloader__circle').style.transition = '0.3s all ease'
//     }
//   })
// }

export { preloader, isShowContent }