import gsap from 'gsap'
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const test = () => {  
  gsap.registerPlugin(MotionPathPlugin);
  gsap.registerPlugin(ScrollTrigger);

  let sections = gsap.utils.toArray('section')
  // console.log(sections)

  // document.body.style.overflowY = 'a'
  document.body.style.overflowX = 'scroll'
  document.querySelector('html').style.scrollbarWidth = 'auto'

  gsap.to(sections, {
    xPercent: -40 * (sections.length - 1),
    ease: 'none',
    markets: true,
    scrollTrigger: {
      trigger: '.main-content',
      pin: true,
      scrub: 1,
      span: 1 / (sections.length - 1),
      // start: (i, e) => {
      //   console.log(i)
      //   console.log(e)
      //   return 1
      // },
      end: () => '+=' + document.querySelector('.main-content').offsetWidth
    }
  })
}