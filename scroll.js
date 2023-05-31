const spyEls = document.querySelectorAll('.section.scroll-spy')
const controller = new ScrollMagic.Controller();

spyEls.forEach(function(spyEl){
    new ScrollMagic.Scene({triggerElement: spyEl})
    .setClassToggle(spyEl, 'show')
    .addTo(controller);
})