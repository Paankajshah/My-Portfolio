import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

//Text Intro
export const textIntro = elem => {
  gsap.from(elem, {
    xPercent: -20,
    opacity: 0,
    stagger: 0.2,
    duration: 2,
    scale: 0.1,
    ease: "back",
  });
}; 
export const hoverIntro1 = elem => {
  gsap.to(elem.target, {
   y:50,
    ease: "back",
  });
}; 
export const hoverIntro2 = elem => {
  gsap.from(elem.target, {
   y:-50,
    ease: "back",
  });
}; 