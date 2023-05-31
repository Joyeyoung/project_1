const fadeEls = document.querySelectorAll('.fade-in')
gsap.from(fadeEls, {
    duration: 2,
    y: 100,
    ease: 'elastic',
    opacity: 0,
    stagger: 0.7
})