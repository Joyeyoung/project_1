
// 메뉴 백그라운드 사라지게
const contaiNer = document.querySelector('.container')
document.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        contaiNer.classList.add('show');
    } else {
        contaiNer.classList.remove('show');
    }
})

