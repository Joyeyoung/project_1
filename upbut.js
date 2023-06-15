// 업 버튼 사라지게
const arrowUp = document.querySelector('.arrow-up')
document.addEventListener('scroll', function () {
    if (window.scrollY > 300) {
        arrowUp.classList.add('show');
    } else {
        arrowUp.classList.remove('show');
    }
})

// 업 버튼 누르면 올라가게
const $Top = document.querySelector('.material-symbols-outlined')
$Top.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

