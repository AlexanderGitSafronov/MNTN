const navBtn = document.querySelector('.nav__button');
const mobileNav = document.querySelector('.mobile__nav');
const body = document.body;

// клик по кнопке
navBtn.addEventListener('click', function(event) {
    event.stopPropagation();
    toglMobileNav()
}) 
// клик за пределами навигации
window.addEventListener('click', function () {
    if (body.classList.contains('no__scroll')) {
        toglMobileNav()
    }
})
// останавливаем клик в нутри открытой навигации
mobileNav.addEventListener('click', function(event) {
    event.stopPropagation();
})

function toglMobileNav() {
    mobileNav.classList.toggle('mobile__nav-active');
    navBtn.classList.toggle('nav__button-close');
    body.classList.toggle('no__scroll');
}