const card = () => {
  document.querySelectorAll('.card').forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.childNodes.forEach(element => {
        if(!element.tagName) return
        element.classList.remove('active')
        // element.style.removeProperty('height')
      })
  
      setTimeout(() => {
        item.classList.toggle('active')
        // item.style.height = item.scrollHeight + 'px'
      }, 200);
    })
  })
}

export { card }



// window.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('.card.active').forEach(item => {
//     item.style.height = item.scrollHeight + 'px'
//   })
// })