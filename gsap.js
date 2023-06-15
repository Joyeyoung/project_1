const fadeEls = document.querySelectorAll('.fade-in')
gsap.from(fadeEls, {
    duration: 2,
    y: 100,
    ease: 'elastic',
    opacity: 0,
    stagger: 0.7
})

const fadeEls2 = document.querySelectorAll('.fade-in2')
gsap.from(fadeEls2, {
    duration: 2,
    x: 100,
    ease: 'elastic',
    opacity: 0,
    stagger: 0.7
})