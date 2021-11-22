import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


window.addEventListener('load', () => {
  gsap.to('#two .section__wrap', {
    scrollTrigger: {
      trigger: '#two',
      start: '0% ' + document.querySelector('#two').offsetLeft,
      end: '100% 0%',
      horizontal: true,
      scrub: true
    },
    x: () => {
      return -(document.querySelector('#two .section__wrap').scrollWidth - document.querySelector('#two').offsetWidth)
    },
    ease: 'linear'
  })

  gsap.to('#three .section__wrap', {
    scrollTrigger: {
      trigger: '#three',
      start: '0% 100%',
      end: '100% 0%',
      horizontal: true,
      scrub: true
    },
    x: () => {
      return -(document.querySelector('#three .section__wrap').scrollWidth - document.querySelector('#three').offsetWidth)
    },
    ease: 'linear'
  })

  gsap.to('#four .section__wrap', {
    scrollTrigger: {
      trigger: '#four',
      start: '0% 100%',
      end: '100% 0%',
      horizontal: true,
      scrub: true
    },
    x: () => {
      return -(document.querySelector('#four .section__wrap').scrollWidth - document.querySelector('#four').offsetWidth)
    },
    ease: 'linear'
  })

  gsap.to('#five .section__wrap', {
    scrollTrigger: {
      trigger: '#five',
      start: '0% 100%',
      end: '100% 0%',
      horizontal: true,
      scrub: true
    },
    x: () => {
      return -(document.querySelector('#five .section__wrap').scrollWidth - document.querySelector('#five').offsetWidth)
    },
    ease: 'linear'
  })

  gsap.to('#seven .section__wrap', {
    scrollTrigger: {
      trigger: '#seven',
      start: '0% 100%',
      end: '100% 0%',
      horizontal: true,
      scrub: true
    },
    x: () => {
      return -(document.querySelector('#seven .section__wrap').scrollWidth - document.querySelector('#seven').offsetWidth)
    },
    ease: 'linear'
  })
})


let scrollX = 0
let currentScrollX = 0;

const setScrollX = (offsetX) => {
  scrollX = offsetX
}

const setCurrentScrollX = (offsetX) => {
  currentScrollX = offsetX
}

const scrollSettings = [
  [500, 8], [100, 7], [20, 6], [10, 5], [5, 5]
]

const customScroll = () => {
  if (scrollX === currentScrollX) {
    return
  }
  if (scrollX !== currentScrollX) {
    if (scrollX - currentScrollX > scrollSettings[0][0]) {
      currentScrollX += scrollSettings[0][1]
    } else if (scrollX - currentScrollX > scrollSettings[1][0]) {
      currentScrollX += scrollSettings[1][1]
    } else if (scrollX - currentScrollX > scrollSettings[2][0]) {
      currentScrollX += scrollSettings[2][1]
    } else if (scrollX - currentScrollX > scrollSettings[3][0]) {
      currentScrollX += scrollSettings[3][1]
    } else if (scrollX - currentScrollX >= scrollSettings[4][0]) {
      currentScrollX += scrollSettings[4][1]
    } else if (scrollX - currentScrollX < -scrollSettings[0][0]) {
      currentScrollX -= scrollSettings[0][1]
    } else if (scrollX - currentScrollX < -scrollSettings[1][0]) {
      currentScrollX -= scrollSettings[1][1]
    } else if (scrollX - currentScrollX < -scrollSettings[2][0]) {
      currentScrollX -= scrollSettings[2][1]
    } else if (scrollX - currentScrollX < -scrollSettings[3][0]) {
      currentScrollX -= scrollSettings[3][1]
    } else if (scrollX - currentScrollX <= -scrollSettings[4][0]) {
      currentScrollX -= scrollSettings[4][1]
    } else if (scrollX - currentScrollX < scrollSettings[4][0] && scrollX - currentScrollX > -scrollSettings[4][0]) {
      currentScrollX = scrollX
    }
    window.scroll(currentScrollX, 0)
  }
  window.requestAnimationFrame(customScroll)
}

let currentSectionInView;

const scroll = () => {





  // Custom horizontal scroll
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 992) {
    console.log('tel')
  } else {
    window.addEventListener('wheel', e => {
      e.preventDefault()


      let isPopupOpen = 0

      document.querySelectorAll('.popup').forEach(item => {
        if (item.style.opacity > 0) {
          isPopupOpen = true
        }
      })

      if (!isPopupOpen) {
        scrollX += e.deltaY * 0.8
      }

      if (scrollX < 0) {
        scrollX = 0
      }

      const maxScrollWidth = document.querySelector('main').scrollWidth - window.innerWidth

      if (scrollX > maxScrollWidth) {
        scrollX = maxScrollWidth
      }



      customScroll()

      // window.scroll(currentScrollX, 0)
    }, { passive: false })

    // Custom transform section with content 
    window.addEventListener('scroll', () => {
      //   let observerSectionWithContent = new IntersectionObserver(
      //     (entries) => {
      //       entries.forEach(entry => {
      //         if (entry.isIntersecting) {
      //           scrollVisibleSection(entry.target)
      //         }
      //       });
      //     },
      //     { threshold: 0 }
      //   );

      //   if (document.querySelector(".section")) {
      //     document
      //       .querySelectorAll(".section")
      //       .forEach(item => observerSectionWithContent.observe(item))
      //   }

      document.querySelectorAll('#one, #two, #three, #four, #five, #six, #seven').forEach((item, index) => {
        // console.log('#' + item.getAttribute('id') + ' - ' + item.getBoundingClientRect().left)

        document.querySelectorAll('.navigation-links__item').forEach(i => {
          i.classList.remove('active')
        })
        if (item.getBoundingClientRect().left < (window.innerWidth / 1.5)) {
          currentSectionInView = item.getAttribute('id')
        }
      })

      document.querySelector(`.navigation-links__item[data-section="${currentSectionInView}"]`).classList.add('active')


    })

    let observerMapSection = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity')
          } else {
            entry.target.classList.add('opacity')
          }
        });
      },
      { threshold: 0.6 }
    );

    if (document.querySelector(".map")) {
      document
        .querySelectorAll(".map")
        .forEach(item => observerMapSection.observe(item))
    }

    // const scrollVisibleSection = (section) => {
    //   // console.log(section.children[0].scrollWidth)
    //   const nedlyScrollWidth = section.children[0].scrollWidth - section.clientWidth
    //   const widthNeedScroll = (window.innerWidth + section.clientWidth)
    //   const cofScrollTarget = nedlyScrollWidth / widthNeedScroll
    //   const some = widthNeedScroll - (section.getBoundingClientRect().left + section.clientWidth)

    //   console.log(some)

    //   section.children[0].style.transform = `translateX(${-some * cofScrollTarget}px)`
    // }

    // window.addEventListener('load', () => {
    //   if (document.querySelector('.section')) {
    //     document.querySelectorAll('section').forEach(item => {
    //       scrollVisibleSection(item)
    //     })
    //   }
    // })
  }
}

window.addEventListener('load', () => {
  setTimeout(() => {
    console.log(window.pageXOffset)
    scrollX = window.pageXOffset
    currentScrollX = window.pageXOffset

    window.scrollTo(currentScrollX, 0)
  }, 100);
})

// window.addEventListener('scroll', () => {
//   const some = document.querySelector('.navigation-links').offsetLeft - window.pageXOffset
//   const some2 = some > 20 ? document.querySelector('.navigation-links').offsetLeft - some : document.querySelector('.navigation-links').offsetLeft - 20
//   document.querySelector('.navigation-links').style.transform = `translateX(${-some2}px)`
//   document.querySelector('.footer > .container').style.transform = `translateX(${-some2}px)`
// })

export { scroll, scrollX, setScrollX, setCurrentScrollX, customScroll }