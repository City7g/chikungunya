const cursor = () => {
  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let mouseAngle = 0

  if(document.querySelector('.cursor')) {
    window.addEventListener('mousemove', e => {
      if(Math.abs(e.clientY - mouseY) > 2 || Math.abs(e.clientX - mouseX) > 2) {
        mouseAngle = Math.PI / 2 + Math.atan2(e.clientY - mouseY, e.clientX - mouseX)
      }
      
      document.querySelector('.cursor').style.transform = `translate(-50%, -50%) rotate(${mouseAngle}rad)`
      document.querySelector('.cursor').style.left = e.clientX + 'px'
      document.querySelector('.cursor').style.top = e.clientY + 'px'
    
      mouseX = e.clientX
      mouseY = e.clientY
    })

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
      document.querySelector('.cursor').style.display = 'none'
    }
  }
}

export { cursor }