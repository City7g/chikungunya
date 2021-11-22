import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let sections = gsap.utils.toArray('.some')

// console.log()


// const some = document.querySelector('.some__wrap').scrollWidth / window.innerWidth * 100
// console.log(document.querySelector('.some__wrap'))

gsap.to(sections, {
  xPercent: -250,
  ease: 'none',
  scrollTrigger: {
    trigger: '.some__wrap',
    pin: true,
    scrub: 1,
    // snap: 1 / (sections.length - 1),
    // end: () => '+=' + document.querySelector('.some__wrap').offsetWidth
  }
})