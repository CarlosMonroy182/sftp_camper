// gsap.to("#nosotros", {
//   scrollTrigger: {
//     trigger: "#nosotros",
//     start: "top center",
//     end: "top 100px",
//     scrub: 1,
//     pin: true,
//     markers: true,
//     toggleActions: "restart pause reverse pause",
//   },
//   x: 400,
//   rotation: 360,
//   ease: "none",
//   duration: 3,
// });

gsap.registerPlugin(ScrollTrigger);

// const sections = gsap.utils.toArray(".panel");
const body = document.querySelector('.gsap_body');
const section = document.querySelector('#nosotros h2');
const b = document.querySelector('#nosotros h2 b');
const nav = document.querySelector('nav');

const tl = gsap.timeline({
  
    scrollTrigger: {
    trigger: ".gsap_body",
    scrub: true,
    start: "top center",
    end: "top"
      
  }
  
})

 tl
 .to(body, { duration: 1, backgroundColor: '#ffffff', ease: "none" }, 1)
 .to(section, { duration: 1, color: '#131313', ease: "none" }, 0.5)
 .to(b, { duration: 1, backgroundColor: '#131313', ease: "none" }, 1)
 .to(nav, { duration: 1, backgroundColor: '#131313', ease: "none" }, 0.7)