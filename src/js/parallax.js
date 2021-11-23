const parallax = () => {
  if (window.innerWidth >= 1200) {
    document.querySelectorAll('.map').forEach(item => {
      item.addEventListener('mousemove', (e) => {
        const transformX = -e.clientX + item.clientWidth / 2
        const transformY = -e.clientY + item.clientHeight / 2
    
        item.querySelectorAll('.section:not(.section--content) .section__bg').forEach(i => i.style.transform = `translate(${transformX * 0.01}px,${transformY * 0.01}px)`)
        item.querySelectorAll('.section .card').forEach(i => {
          const cof = i.getAttribute('data-cof') ? i.getAttribute('data-cof') : 0.007
          // console.log(i)
          i.style.transform = `translate(${transformX * cof}px,${transformY * cof}px)`
        })
      })
    })
  }
}
export { parallax }