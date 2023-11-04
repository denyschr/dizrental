function burgerMenu() {
    const burger = document?.querySelector('.burger');
    const menu = document?.querySelector('.nav');
    const navItems = document?.querySelectorAll('.nav__link');
    const body = document?.querySelector('body');
    burger.addEventListener('click', () => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('locked');
    });
    navItems.forEach(el => {
        el.addEventListener('click', () => {
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            body.classList.remove('locked');
        });
    });
    window.addEventListener('resize', () => {
        if (window.innerWidth > 991.98) {
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            body.classList.remove('locked');
        }
    });
}
module.exports = burgerMenu();

window.addEventListener('scroll', function () {
    scrollY > 0 ? document.querySelector('.header').classList.add('scroll') : document.querySelector('.header').classList.remove('scroll');
});
