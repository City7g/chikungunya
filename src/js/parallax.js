const parallax = () => {
  if (window.innerWidth >= 1200) {
    document.querySelectorAll('.map').forEach(item => {
      item.addEventListener('mousemove', (e) => {
        const transformX = -e.clientX + item.clientWidth / 2
        const transformY = -e.clientY + item.clientHeight / 2
    
        item.querySelectorAll('.map__bg').forEach(i => i.style.transform = `translate(${transformX * 0.01}px,${transformY * 0.01}px)`)
        item.querySelectorAll('.card').forEach(i => {
          // const cof = i.getAttribute('data-cof') ? i.getAttribute('data-cof') : 0.007
          const cof = 0.02
          // console.log(i)
          i.style.transform = `translate(calc(-50% + ${transformX * cof}px),calc(-50% + ${transformY * cof}px))`
        })
      })
    })
  }
}
export { parallax }